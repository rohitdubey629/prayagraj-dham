import mongoose, { Schema, Document } from "mongoose";

export type PlaceCategory =
  | "Temple"
  | "Ghat"
  | "Ashram"
  | "Historical"
  | "Other";

export type PlaceStatus = "pending" | "approved" | "rejected";

export interface IPlace extends Document {
  name: string;
  nameHindi: string;
  category: PlaceCategory;
  location: string;
  locationEnglish?: string;
  descriptionHindi: string;
  descriptionEnglish?: string;
  visitingHours?: string;
  visitingHoursEnglish?: string;
  importance?: string;
  importanceEnglish?: string;
  specialFeatures?: string[];
  specialFeaturesEnglish?: string[];
  imageUrl?: string;
  mapsLink?: string;
  submittedByName?: string;
  submittedByContact?: string;
  status: PlaceStatus;
  featured: boolean;
  rejectionReason?: string;
  reviewedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const PlaceSchema = new Schema<IPlace>(
  {
    name: { type: String, required: true },
    nameHindi: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: ["Temple", "Ghat", "Ashram", "Historical", "Other"],
    },
    location: { type: String, required: true },
    locationEnglish: { type: String },
    descriptionHindi: { type: String, required: true },
    descriptionEnglish: { type: String },
    visitingHours: { type: String },
    visitingHoursEnglish: { type: String },
    importance: { type: String },
    importanceEnglish: { type: String },
    specialFeatures: { type: [String], default: undefined },
    specialFeaturesEnglish: { type: [String], default: undefined },
    imageUrl: { type: String },
    mapsLink: { type: String },
    submittedByName: { type: String },
    submittedByContact: { type: String },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    featured: { type: Boolean, default: false },
    rejectionReason: { type: String },
    reviewedAt: { type: Date },
  },
  { timestamps: true }
);

export const Place = mongoose.model<IPlace>("Place", PlaceSchema);
