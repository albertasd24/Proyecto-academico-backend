import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name:String,
    lastname: String,
    email:String,
    password: String,
    role: String,
    photo: String
  },
  { versionKey: false }
);
const userModel = model("templates", userSchema);
export { userModel };