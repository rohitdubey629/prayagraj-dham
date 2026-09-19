import { Router, Request, Response } from "express";
import { Post } from "../models/Post";
import { requireAdmin } from "../middleware/auth";

const router = Router();

// GET /api/posts - public, optional ?featured=true
router.get("/", async (req: Request, res: Response) => {
  try {
    const { featured } = req.query;
    const filter: Record<string, unknown> = {};

    if (featured === "true") {
      filter.featured = true;
    }

    const posts = await Post.find(filter).sort({ date: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch posts" });
  }
});

// GET /api/posts/admin - admin only, all posts
// (declared before /:id so "admin" isn't captured as an id)
router.get("/admin", requireAdmin, async (_req: Request, res: Response) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch posts" });
  }
});

// POST /api/posts/admin - admin only, create
router.post("/admin", requireAdmin, async (req: Request, res: Response) => {
  try {
    const { title, content, category, image, author, date } = req.body as {
      title?: string;
      content?: string;
      category?: string;
      image?: string;
      author?: string;
      date?: string;
    };

    if (!title || !content || !category || !author || !date) {
      res.status(400).json({ message: "Missing required field(s)" });
      return;
    }

    const post = await Post.create({ title, content, category, image, author, date });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: "Failed to create post" });
  }
});

// PUT /api/posts/admin/:id - admin only, update
router.put("/admin/:id", requireAdmin, async (req: Request, res: Response) => {
  try {
    const { title, content, category, image, author, date } = req.body as {
      title?: string;
      content?: string;
      category?: string;
      image?: string;
      author?: string;
      date?: string;
    };

    const post = await Post.findById(req.params.id);

    if (!post) {
      res.status(404).json({ message: "Post not found" });
      return;
    }

    if (title !== undefined) post.title = title;
    if (content !== undefined) post.content = content;
    if (category !== undefined) post.category = category;
    if (image !== undefined) post.image = image;
    if (author !== undefined) post.author = author;
    if (date !== undefined) post.date = new Date(date);

    await post.save();
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: "Failed to update post" });
  }
});

// POST /api/posts/admin/:id/feature - admin only
router.post("/admin/:id/feature", requireAdmin, async (req: Request, res: Response) => {
  try {
    const { featured } = req.body as { featured?: boolean };
    const post = await Post.findById(req.params.id);

    if (!post) {
      res.status(404).json({ message: "Post not found" });
      return;
    }

    post.featured = Boolean(featured);
    await post.save();

    res.json(post);
  } catch (error) {
    res.status(500).json({ message: "Failed to update featured status" });
  }
});

// DELETE /api/posts/admin/:id - admin only
router.delete("/admin/:id", requireAdmin, async (req: Request, res: Response) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);

    if (!post) {
      res.status(404).json({ message: "Post not found" });
      return;
    }

    res.json({ message: "Post deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete post" });
  }
});

// GET /api/posts/:id - public, single post
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      res.status(404).json({ message: "Post not found" });
      return;
    }

    res.json(post);
  } catch (error) {
    res.status(404).json({ message: "Post not found" });
  }
});

export default router;
