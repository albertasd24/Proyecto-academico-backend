import multer from "multer";
import { join } from "path";

const memoryStorage = multer.memoryStorage();

export const uploadPhoto = multer({
  limits: { fileSize: 20000000 },
  storage: memoryStorage,
  filename: (req, file, cb) => {
    cb(null, nombreArchivo);
  },
}).single("photo");
