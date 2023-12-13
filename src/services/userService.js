import { compareEncrypt, encrypt } from "../helper/encrypt.js";
import { userModel } from "../model/userModel.js";

export const authentication = async (email, password) => {
  const user = await searchUserByEmail(email, { name: 1, lastname: 1, photo: 1, role: 1, password: 1 });
  const isCorrect = await compareEncrypt(password, user.password);
  if (!isCorrect) {
    throw new Error("Error in login");
  }
  user.password = "";
  return user;
};

export const searchUserByEmail = async (email, filtro = {}) => {
  const user = await userModel.findOne({ email }, filtro);
  if (user.email == "") {
    throw new Error("Email not found");
  }
  return user;
};

export const createUserService = async (user) => {
  const passwordEncrypt = await encrypt(user.password);
  user.password = passwordEncrypt;
  const newUser = await userModel.create(user);
  return newUser;
}
