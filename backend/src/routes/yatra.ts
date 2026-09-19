import { Router, Request, Response } from "express";
import { Visit } from "../models/Visit";
import { Wishlist } from "../models/Wishlist";
import { requireUser } from "../middleware/auth";

const router = Router();

// All Yatra routes are private to the signed-in user — every query is
// scoped by req.userId, set by requireUser from the verified JWT.
router.use(requireUser);

// GET /api/yatra/visits — every visit belonging to the current user
router.get("/visits", async (req: Request, res: Response) => {
  try {
    const visits = await Visit.find({ userId: req.userId }).sort({ visitedAt: -1 });
    res.json(visits);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch visits" });
  }
});

// POST /api/yatra/visits — record a new visit; visitNumber is computed
// server-side from how many visits this user already has for the place.
router.post("/visits", async (req: Request, res: Response) => {
  try {
    const { placeId, visitedAt, companions, travelMethod, memory, notes, photos } = req.body as {
      placeId?: string;
      visitedAt?: string;
      companions?: string;
      travelMethod?: string;
      memory?: string;
      notes?: string;
      photos?: string[];
    };

    if (!placeId || !visitedAt) {
      res.status(400).json({ message: "placeId and visitedAt are required" });
      return;
    }

    const priorCount = await Visit.countDocuments({ userId: req.userId, placeId });

    const visit = await Visit.create({
      userId: req.userId,
      placeId,
      visitedAt: new Date(visitedAt),
      visitNumber: priorCount + 1,
      companions,
      travelMethod,
      memory,
      notes,
      photos,
    });

    res.status(201).json(visit);
  } catch (error) {
    res.status(500).json({ message: "Failed to save visit" });
  }
});

// DELETE /api/yatra/visits/:id
router.delete("/visits/:id", async (req: Request, res: Response) => {
  try {
    const visit = await Visit.findOneAndDelete({ _id: req.params.id, userId: req.userId });
    if (!visit) {
      res.status(404).json({ message: "Visit not found" });
      return;
    }
    res.json({ message: "Visit deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete visit" });
  }
});

// GET /api/yatra/wishlist
router.get("/wishlist", async (req: Request, res: Response) => {
  try {
    const items = await Wishlist.find({ userId: req.userId }).sort({ createdAt: -1 });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch wishlist" });
  }
});

// POST /api/yatra/wishlist — toggles a place on/off the current user's list
router.post("/wishlist", async (req: Request, res: Response) => {
  try {
    const { placeId } = req.body as { placeId?: string };
    if (!placeId) {
      res.status(400).json({ message: "placeId is required" });
      return;
    }

    const existing = await Wishlist.findOne({ userId: req.userId, placeId });
    if (existing) {
      await existing.deleteOne();
      res.json({ placeId, wishlisted: false });
      return;
    }

    await Wishlist.create({ userId: req.userId, placeId });
    res.json({ placeId, wishlisted: true });
  } catch (error) {
    res.status(500).json({ message: "Failed to update wishlist" });
  }
});

export default router;
