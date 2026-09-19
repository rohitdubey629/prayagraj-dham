import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { connectDB } from "./lib/db";
import authRoutes from "./routes/auth";
import placesRoutes from "./routes/places";
import shlokasRoutes from "./routes/shlokas";
import postsRoutes from "./routes/posts";
import heroRoutes from "./routes/hero";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/places", placesRoutes);
app.use("/api/shlokas", shlokasRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/hero", heroRoutes);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});
