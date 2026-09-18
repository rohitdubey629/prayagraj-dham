import { Router, Request, Response } from "express";
import { Shloka } from "../models/Shloka";
import { requireAdmin } from "../middleware/auth";

const router = Router();

// GET /api/shlokas - public, approved only, optional ?featured=true
router.get("/", async (req: Request, res: Response) => {
  try {
    const { featured } = req.query;
    const filter: Record<string, unknown> = { status: "approved" };

    if (featured === "true") {
      filter.featured = true;
    }

    const shlokas = await Shloka.find(filter)
      .select("-submittedByEmail -submittedByMobile")
      .sort({ createdAt: -1 });

    res.json(shlokas);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch shlokas" });
  }
});

// GET /api/shlokas/today - public, approved shlokas scheduled for today
router.get("/today", async (_req: Request, res: Response) => {
  try {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const shlokas = await Shloka.find({
      status: "approved",
      scheduledDate: { $gte: startOfDay, $lte: endOfDay },
    })
      .select("-submittedByEmail -submittedByMobile")
      .sort({ createdAt: -1 });

    res.json(shlokas);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch today's shlokas" });
  }
});

// GET /api/shlokas/admin/pending - admin only
// (declared before any /:id-style route so "admin" isn't captured as an id)
router.get("/admin/pending", requireAdmin, async (_req: Request, res: Response) => {
  try {
    const shlokas = await Shloka.find({ status: "pending" }).sort({ createdAt: -1 });
    res.json(shlokas);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch pending shlokas" });
  }
});

// GET /api/shlokas/admin/approved - admin only
router.get("/admin/approved", requireAdmin, async (_req: Request, res: Response) => {
  try {
    const shlokas = await Shloka.find({ status: "approved" }).sort({ createdAt: -1 });
    res.json(shlokas);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch approved shlokas" });
  }
});

// POST /api/shlokas/admin/:id/feature - admin only
router.post("/admin/:id/feature", requireAdmin, async (req: Request, res: Response) => {
  try {
    const { featured } = req.body as { featured?: boolean };
    const shloka = await Shloka.findById(req.params.id);

    if (!shloka) {
      res.status(404).json({ message: "Shloka not found" });
      return;
    }

    shloka.featured = Boolean(featured);
    await shloka.save();

    res.json(shloka);
  } catch (error) {
    res.status(500).json({ message: "Failed to update featured status" });
  }
});

// POST /api/shlokas/admin - admin only, creates a shloka pre-approved
router.post("/admin", requireAdmin, async (req: Request, res: Response) => {
  try {
    const { text, source, meaning, scheduledDate } = req.body as Record<string, string | undefined>;

    if (!text || !text.trim()) {
      res.status(400).json({ message: "Missing required field: text" });
      return;
    }

    const shloka = await Shloka.create({
      text,
      source,
      meaning,
      scheduledDate: scheduledDate ? new Date(scheduledDate) : undefined,
      submittedByName: "Admin",
      submittedByEmail: "admin@prayagraj-dham.local",
      status: "approved",
      reviewedAt: new Date(),
    });

    res.status(201).json(shloka);
  } catch (error) {
    res.status(500).json({ message: "Failed to create shloka" });
  }
});

// POST /api/shlokas/admin/:id/approve - admin only
router.post("/admin/:id/approve", requireAdmin, async (req: Request, res: Response) => {
  try {
    const shloka = await Shloka.findById(req.params.id);

    if (!shloka) {
      res.status(404).json({ message: "Shloka not found" });
      return;
    }

    shloka.status = "approved";
    shloka.reviewedAt = new Date();
    await shloka.save();

    res.json(shloka);
  } catch (error) {
    res.status(500).json({ message: "Failed to approve shloka" });
  }
});

// POST /api/shlokas/admin/:id/reject - admin only
router.post("/admin/:id/reject", requireAdmin, async (req: Request, res: Response) => {
  try {
    const { reason } = req.body as { reason?: string };
    const shloka = await Shloka.findById(req.params.id);

    if (!shloka) {
      res.status(404).json({ message: "Shloka not found" });
      return;
    }

    shloka.status = "rejected";
    shloka.rejectionReason = reason;
    shloka.reviewedAt = new Date();
    await shloka.save();

    res.json(shloka);
  } catch (error) {
    res.status(500).json({ message: "Failed to reject shloka" });
  }
});

// DELETE /api/shlokas/admin/:id - admin only
router.delete("/admin/:id", requireAdmin, async (req: Request, res: Response) => {
  try {
    const shloka = await Shloka.findByIdAndDelete(req.params.id);

    if (!shloka) {
      res.status(404).json({ message: "Shloka not found" });
      return;
    }

    res.json({ message: "Shloka deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete shloka" });
  }
});

// POST /api/shlokas - public, no auth, creates a pending submission
router.post("/", async (req: Request, res: Response) => {
  try {
    const {
      text,
      source,
      meaning,
      scheduledDate,
      submittedByName,
      submittedByEmail,
      submittedByMobile,
    } = req.body as Record<string, string | undefined>;

    const requiredFields: Record<string, string | undefined> = {
      text,
      submittedByName,
      submittedByEmail,
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

    const shloka = await Shloka.create({
      text,
      source,
      meaning,
      scheduledDate: scheduledDate ? new Date(scheduledDate) : undefined,
      submittedByName,
      submittedByEmail,
      submittedByMobile,
      status: "pending",
    });

    res.status(201).json(shloka);
  } catch (error) {
    res.status(500).json({ message: "Failed to create shloka" });
  }
});

export default router;
