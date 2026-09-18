import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface AdminJwtPayload {
  email: string;
  role: string;
}

export function requireAdmin(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "Missing or invalid authorization header" });
    return;
  }

  const token = authHeader.slice("Bearer ".length);

  try {
    const payload = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as AdminJwtPayload;

    if (payload.role !== "admin") {
      res.status(401).json({ message: "Not authorized" });
      return;
    }

    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
}
