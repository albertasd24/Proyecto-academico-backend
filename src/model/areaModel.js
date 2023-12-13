import { Schema, model } from "mongoose";

const areaSchema = new Schema(
  {
    image:String,
    name: String,
  },
  { versionKey: false }
);
const areaModel = model("templates", areaSchema);
export { areaModel };