import { Schema, model } from "mongoose";

const areaSchema = new Schema(
  {
    image:String,
    name: String,
    proccess: Array
  },
  { versionKey: false }
);
const areaModel = model("areas", areaSchema);
export { areaModel };