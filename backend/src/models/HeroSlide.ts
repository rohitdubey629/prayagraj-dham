import mongoose, { Schema, Document } from "mongoose";

export type HeroMediaType = "image" | "video";

export interface IHeroSlide extends Document {
  mediaUrl: string;
  mediaType: HeroMediaType;
  createdAt: Date;
  updatedAt: Date;
}

const HeroSlideSchema = new Schema<IHeroSlide>(
  {
    mediaUrl: { type: String, required: true },
    mediaType: { type: String, enum: ["image", "video"], required: true },
  },
  { timestamps: true }
);

export const HeroSlide = mongoose.model<IHeroSlide>("HeroSlide", HeroSlideSchema);
