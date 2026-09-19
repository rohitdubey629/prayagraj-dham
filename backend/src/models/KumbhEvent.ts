import mongoose, { Schema, Document } from "mongoose";

export type KumbhLocation = "Prayagraj" | "Haridwar" | "Ujjain" | "Nashik";
export type KumbhType = "Maha Kumbh" | "Purna Kumbh" | "Ardh Kumbh" | "Simhastha";

export interface IKumbhEvent extends Document {
  location: KumbhLocation;
  locationHindi: string;
  kumbhType: KumbhType;
  kumbhTypeHindi: string;
  year: number;
  startDate?: Date;
  endDate?: Date;
  description?: string;
  descriptionEnglish?: string;
  isApproximate: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const KumbhEventSchema = new Schema<IKumbhEvent>(
  {
    location: {
      type: String,
      required: true,
      enum: ["Prayagraj", "Haridwar", "Ujjain", "Nashik"],
    },
    locationHindi: { type: String, required: true },
    kumbhType: {
      type: String,
      required: true,
      enum: ["Maha Kumbh", "Purna Kumbh", "Ardh Kumbh", "Simhastha"],
    },
    kumbhTypeHindi: { type: String, required: true },
    year: { type: Number, required: true },
    startDate: { type: Date },
    endDate: { type: Date },
    description: { type: String },
    descriptionEnglish: { type: String },
    isApproximate: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const KumbhEvent = mongoose.model<IKumbhEvent>("KumbhEvent", KumbhEventSchema);
