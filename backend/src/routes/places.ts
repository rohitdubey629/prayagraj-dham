import { Router, Request, Response } from "express";
import { Place } from "../models/Place";
import { requireAdmin } from "../middleware/auth";
import { upload, uploadBufferToCloudinary } from "../middleware/upload";

const router = Router();

// GET /api/places - public, approved only, optional ?category= and ?featured=true
router.get("/", async (req: Request, res: Response) => {
  try {
    const { category, featured } = req.query;
    const filter: Record<string, unknown> = { status: "approved" };

    if (category) {
      filter.category = category;
    }
    if (featured === "true") {
      filter.featured = true;
    }

    const places = await Place.find(filter)
      .select("-submittedByContact")
      .sort({ createdAt: -1 });

    res.json(places);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch places" });
  }
});

// GET /api/places/admin/pending - admin only
// (declared before /:id so "admin" isn't captured as an id)
router.get("/admin/pending", requireAdmin, async (_req: Request, res: Response) => {
  try {
    const places = await Place.find({ status: "pending" }).sort({
      createdAt: -1,
    });

    res.json(places);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch pending places" });
  }
});

// GET /api/places/admin/approved - admin only
router.get("/admin/approved", requireAdmin, async (_req: Request, res: Response) => {
  try {
    const places = await Place.find({ status: "approved" }).sort({
      createdAt: -1,
    });

    res.json(places);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch approved places" });
  }
});

// POST /api/places/admin/:id/feature - admin only
router.post("/admin/:id/feature", requireAdmin, async (req: Request, res: Response) => {
  try {
    const { featured } = req.body as { featured?: boolean };
    const place = await Place.findById(req.params.id);

    if (!place) {
      res.status(404).json({ message: "Place not found" });
      return;
    }

    place.featured = Boolean(featured);
    await place.save();

    res.json(place);
  } catch (error) {
    res.status(500).json({ message: "Failed to update featured status" });
  }
});

// POST /api/places/admin/:id/approve - admin only
router.post(
  "/admin/:id/approve",
  requireAdmin,
  async (req: Request, res: Response) => {
    try {
      const place = await Place.findById(req.params.id);

      if (!place) {
        res.status(404).json({ message: "Place not found" });
        return;
      }

      place.status = "approved";
      place.reviewedAt = new Date();
      await place.save();

      res.json(place);
    } catch (error) {
      res.status(500).json({ message: "Failed to approve place" });
    }
  }
);

// POST /api/places/admin/:id/reject - admin only
router.post(
  "/admin/:id/reject",
  requireAdmin,
  async (req: Request, res: Response) => {
    try {
      const { reason } = req.body as { reason?: string };
      const place = await Place.findById(req.params.id);

      if (!place) {
        res.status(404).json({ message: "Place not found" });
        return;
      }

      place.status = "rejected";
      place.rejectionReason = reason;
      place.reviewedAt = new Date();
      await place.save();

      res.json(place);
    } catch (error) {
      res.status(500).json({ message: "Failed to reject place" });
    }
  }
);

// DELETE /api/places/admin/:id - admin only
router.delete(
  "/admin/:id",
  requireAdmin,
  async (req: Request, res: Response) => {
    try {
      const place = await Place.findByIdAndDelete(req.params.id);

      if (!place) {
        res.status(404).json({ message: "Place not found" });
        return;
      }

      res.json({ message: "Place deleted" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete place" });
    }
  }
);

// GET /api/places/:id - public, single approved place
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const place = await Place.findOne({
      _id: req.params.id,
      status: "approved",
    }).select("-submittedByContact");

    if (!place) {
      res.status(404).json({ message: "Place not found" });
      return;
    }

    res.json(place);
  } catch (error) {
    res.status(404).json({ message: "Place not found" });
  }
});

// POST /api/places - public, no auth, creates a pending submission
router.post("/", upload, async (req: Request, res: Response) => {
  try {
    const {
      name,
      nameHindi,
      category,
      location,
      locationEnglish,
      descriptionHindi,
      descriptionEnglish,
      visitingHours,
      visitingHoursEnglish,
      importance,
      importanceEnglish,
      mapsLink,
      submittedByName,
      submittedByContact,
    } = req.body as Record<string, string | undefined>;

    const requiredFields: Record<string, string | undefined> = {
      name,
      nameHindi,
      category,
      location,
      descriptionHindi,
    };

    const missingFields = Object.entries(requiredFields)
      .filter(([, value]) => !value || !value.trim())
      .map(([key]) => key);

    if (missingFields.length > 0) {
      res.status(400).json({
        message: `Missing required field(s): ${missingFields.join(", ")}`,
      });
      return;
    }

    function parseFeatureList(raw: string | undefined): string[] | undefined {
      if (!raw) return undefined;
      try {
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : undefined;
      } catch {
        return undefined;
      }
    }

    const specialFeatures = parseFeatureList(req.body.specialFeatures);
    const specialFeaturesEnglish = parseFeatureList(req.body.specialFeaturesEnglish);

    const files = req.files as
      | { image?: Express.Multer.File[]; images?: Express.Multer.File[] }
      | undefined;

    let imageUrl: string | undefined;
    if (files?.image?.[0]) {
      imageUrl = await uploadBufferToCloudinary(files.image[0].buffer);
    }

    let images: string[] | undefined;
    if (files?.images?.length) {
      images = await Promise.all(
        files.images.map((file) => uploadBufferToCloudinary(file.buffer))
      );
    }

    const place = await Place.create({
      name,
      nameHindi,
      category,
      location,
      locationEnglish,
      descriptionHindi,
      descriptionEnglish,
      visitingHours,
      visitingHoursEnglish,
      importance,
      importanceEnglish,
      specialFeatures,
      specialFeaturesEnglish,
      imageUrl,
      images,
      mapsLink,
      submittedByName,
      submittedByContact,
      status: "pending",
    });

    res.status(201).json(place);
  } catch (error) {
    res.status(500).json({ message: "Failed to create place" });
  }
});

export default router;
