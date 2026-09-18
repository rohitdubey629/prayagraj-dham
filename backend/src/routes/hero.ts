import { Router, Request, Response } from "express";
import { HeroSlide } from "../models/HeroSlide";
import { requireAdmin } from "../middleware/auth";
import { uploadHeroMedia, uploadBufferToCloudinary } from "../middleware/upload";

const router = Router();

// GET /api/hero - public, all hero slides, oldest first (display order)
router.get("/", async (_req: Request, res: Response) => {
  try {
    const slides = await HeroSlide.find().sort({ createdAt: 1 });
    res.json(slides);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch hero slides" });
  }
});

// POST /api/hero - admin only, uploads an image or video and adds it as a slide
router.post("/", requireAdmin, uploadHeroMedia, async (req: Request, res: Response) => {
  try {
    const file = req.file;

    if (!file) {
      res.status(400).json({ message: "Missing required field: media" });
      return;
    }

    const isVideo = file.mimetype.startsWith("video/");
    const mediaUrl = await uploadBufferToCloudinary(file.buffer, {
      folder: "prayagraj-dham/hero",
      resourceType: isVideo ? "video" : "image",
    });

    const slide = await HeroSlide.create({
      mediaUrl,
      mediaType: isVideo ? "video" : "image",
    });

    res.status(201).json(slide);
  } catch (error) {
    res.status(500).json({ message: "Failed to add hero slide" });
  }
});

// DELETE /api/hero/:id - admin only
router.delete("/:id", requireAdmin, async (req: Request, res: Response) => {
  try {
    const slide = await HeroSlide.findByIdAndDelete(req.params.id);

    if (!slide) {
      res.status(404).json({ message: "Hero slide not found" });
      return;
    }

    res.json({ message: "Hero slide deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete hero slide" });
  }
});

export default router;
