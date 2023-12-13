import { compareEncrypt } from "../helper/encrypt.js";
import { userModel } from "../model/userModel.js";

export const authentication = async (email, password) => {
  const user = await searchUserByEmail(email);
  const isCorrect = await compareEncrypt(password, user.password);
  if (!isCorrect) {
    throw Error("Error in login");
  }
  return user;
};

export const searchUserByEmail = async (email) => {
  const user = await userModel.findOne({ email }, { password: 0 });
  if (user.email == "") {
    throw Error("Email not found");
  }
  return user;
};
