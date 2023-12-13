import multer from "multer";
import { join } from "path";
import { __dirname } from "../util/urlHandle.js";

const memoryStorage = multer.memoryStorage();

const uploadPhoto = multer({
    limits: { fileSize: 20000000 },
    storage: memoryStorage,
    filename: (req, file, cb) => {
      cb(null, nombreArchivo);
    },
  }).single("photo");

export default uploadPhoto