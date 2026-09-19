import mongoose, { Schema, Document } from "mongoose";

export interface IWishlist extends Document {
  userId: mongoose.Types.ObjectId;
  placeId: string;
  createdAt: Date;
}

const WishlistSchema = new Schema<IWishlist>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    placeId: { type: String, required: true },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

WishlistSchema.index({ userId: 1, placeId: 1 }, { unique: true });

export const Wishlist = mongoose.model<IWishlist>("Wishlist", WishlistSchema);
