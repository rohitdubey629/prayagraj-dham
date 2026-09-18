import { Router, Request, Response } from "express";
import jwt from "jsonwebtoken";

const router = Router();

router.post("/login", (req: Request, res: Response) => {
  const { email, password } = req.body as { email?: string; password?: string };

  if (!email || !password) {
    res.status(400).json({ message: "Email and password are required" });
    return;
  }

  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    res.status(401).json({ message: "Invalid credentials" });
    return;
  }

  const token = jwt.sign(
    { email, role: "admin" },
    process.env.JWT_SECRET!,
    { expiresIn: "7d" }
  );

  res.json({ token });
});

export default router;
