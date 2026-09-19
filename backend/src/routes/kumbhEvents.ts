import { Router, Request, Response } from "express";
import { KumbhEvent, KumbhLocation, KumbhType } from "../models/KumbhEvent";
import { requireAdmin } from "../middleware/auth";

const router = Router();

// GET /api/kumbh-events - public, all events sorted by year ascending
router.get("/", async (_req: Request, res: Response) => {
  try {
    const events = await KumbhEvent.find().sort({ year: 1 });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch Kumbh events" });
  }
});

// POST /api/kumbh-events - admin only
router.post("/", requireAdmin, async (req: Request, res: Response) => {
  try {
    const {
      location,
      locationHindi,
      kumbhType,
      kumbhTypeHindi,
      year,
      startDate,
      endDate,
      description,
      descriptionEnglish,
      isApproximate,
    } = req.body as Record<string, string | number | boolean | undefined>;

    const requiredFields: Record<string, unknown> = {
      location,
      locationHindi,
      kumbhType,
      kumbhTypeHindi,
      year,
    };

    const missingFields = Object.entries(requiredFields)
      .filter(([, value]) => value === undefined || value === "")
      .map(([key]) => key);

    if (missingFields.length > 0) {
      res.status(400).json({
        message: `Missing required field(s): ${missingFields.join(", ")}`,
      });
      return;
    }

    const event = await KumbhEvent.create({
      location,
      locationHindi,
      kumbhType,
      kumbhTypeHindi,
      year,
      startDate: startDate ? new Date(startDate as string) : undefined,
      endDate: endDate ? new Date(endDate as string) : undefined,
      description,
      descriptionEnglish,
      isApproximate: Boolean(isApproximate),
    });

    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: "Failed to create Kumbh event" });
  }
});

// PUT /api/kumbh-events/:id - admin only
router.put("/:id", requireAdmin, async (req: Request, res: Response) => {
  try {
    const {
      location,
      locationHindi,
      kumbhType,
      kumbhTypeHindi,
      year,
      startDate,
      endDate,
      description,
      descriptionEnglish,
      isApproximate,
    } = req.body as Record<string, string | number | boolean | undefined>;

    const event = await KumbhEvent.findById(req.params.id);
    if (!event) {
      res.status(404).json({ message: "Kumbh event not found" });
      return;
    }

    if (location !== undefined) event.location = location as KumbhLocation;
    if (locationHindi !== undefined) event.locationHindi = locationHindi as string;
    if (kumbhType !== undefined) event.kumbhType = kumbhType as KumbhType;
    if (kumbhTypeHindi !== undefined) event.kumbhTypeHindi = kumbhTypeHindi as string;
    if (year !== undefined) event.year = year as number;
    if (startDate !== undefined) event.startDate = startDate ? new Date(startDate as string) : undefined;
    if (endDate !== undefined) event.endDate = endDate ? new Date(endDate as string) : undefined;
    if (description !== undefined) event.description = description as string;
    if (descriptionEnglish !== undefined) event.descriptionEnglish = descriptionEnglish as string;
    if (isApproximate !== undefined) event.isApproximate = Boolean(isApproximate);

    await event.save();
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: "Failed to update Kumbh event" });
  }
});

// DELETE /api/kumbh-events/:id - admin only
router.delete("/:id", requireAdmin, async (req: Request, res: Response) => {
  try {
    const event = await KumbhEvent.findByIdAndDelete(req.params.id);
    if (!event) {
      res.status(404).json({ message: "Kumbh event not found" });
      return;
    }
    res.json({ message: "Kumbh event deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete Kumbh event" });
  }
});

export default router;
