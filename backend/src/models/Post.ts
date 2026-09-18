import mongoose, { Schema, Document } from "mongoose";

export interface IPost extends Document {
  title: string;
  content: string;
  category: string;
  image?: string;
  author: string;
  date: Date;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema = new Schema<IPost>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String },
    author: { type: String, required: true },
    date: { type: Date, required: true },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Post = mongoose.model<IPost>("Post", PostSchema);
