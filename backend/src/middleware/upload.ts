import multer from "multer";
import { cloudinary } from "../lib/cloudinary";

const storage = multer.memoryStorage();

// "image" = primary/cover photo (single), "images" = extra gallery photos (up to 5)
export const upload = multer({ storage }).fields([
  { name: "image", maxCount: 1 },
  { name: "images", maxCount: 5 },
]);

// "media" = a single hero image or video (up to 25MB, for the homepage hero slideshow)
export const uploadHeroMedia = multer({
  storage,
  limits: { fileSize: 25 * 1024 * 1024 },
}).single("media");

export function uploadBufferToCloudinary(
  buffer: Buffer,
  options: { folder?: string; resourceType?: "image" | "video" } = {}
): Promise<string> {
  const { folder = "prayagraj-dham/places", resourceType = "image" } = options;
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder, resource_type: resourceType },
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
