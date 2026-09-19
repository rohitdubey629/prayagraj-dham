import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface AdminJwtPayload {
  email: string;
  role: string;
}

interface UserJwtPayload {
  userId: string;
  email: string;
  role: string;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
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

// Accepts any signed-in user (regular user or admin) — used for personal
// features like the Yatra diary, which don't need admin privileges, only a
// known identity to scope the data to.
export function requireUser(
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
    const payload = jwt.verify(token, process.env.JWT_SECRET!) as UserJwtPayload;

    if (!payload.userId) {
      res.status(401).json({ message: "Not authorized" });
      return;
    }

    req.userId = payload.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
}
