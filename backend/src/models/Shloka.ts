import mongoose, { Schema, Document } from "mongoose";

export type ShlokaStatus = "pending" | "approved" | "rejected";

export interface IShloka extends Document {
  text: string;
  source?: string;
  meaning?: string;
  scheduledDate?: Date;
  submittedByName: string;
  submittedByEmail: string;
  submittedByMobile?: string;
  status: ShlokaStatus;
  featured: boolean;
  rejectionReason?: string;
  reviewedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const ShlokaSchema = new Schema<IShloka>(
  {
    text: { type: String, required: true },
    source: { type: String },
    meaning: { type: String },
    scheduledDate: { type: Date },
    submittedByName: { type: String, required: true },
    submittedByEmail: { type: String, required: true },
    submittedByMobile: { type: String },
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

export const Shloka = mongoose.model<IShloka>("Shloka", ShlokaSchema);
