import multer from "multer";
import { cloudinary } from "../lib/cloudinary";

const storage = multer.memoryStorage();

export const upload = multer({ storage }).single("image");

export function uploadBufferToCloudinary(buffer: Buffer): Promise<string> {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: "prayagraj-dham/places" },
      (error, result) => {
        if (error || !result) {
          reject(error || new Error("Cloudinary upload failed"));
          return;
        }
        resolve(result.secure_url);
      }
    );

    uploadStream.end(buffer);
  });
}
