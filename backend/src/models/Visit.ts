import mongoose, { Schema, Document } from "mongoose";

export interface IVisit extends Document {
  userId: mongoose.Types.ObjectId;
  placeId: string;
  visitedAt: Date;
  visitNumber: number;
  companions?: string;
  travelMethod?: string;
  memory?: string;
  notes?: string;
  photos?: string[];
  createdAt: Date;
  updatedAt: Date;
}

const VisitSchema = new Schema<IVisit>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    placeId: { type: String, required: true, index: true },
    visitedAt: { type: Date, required: true },
    visitNumber: { type: Number, required: true },
    companions: { type: String },
    travelMethod: { type: String },
    memory: { type: String },
    notes: { type: String },
    photos: { type: [String], default: undefined },
  },
  { timestamps: true }
);

export const Visit = mongoose.model<IVisit>("Visit", VisitSchema);
