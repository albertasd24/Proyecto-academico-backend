import { compare, hash } from "bcrypt";

export const encrypt = async (key) => {
  const textEncrypt = await hash(key, 8);
  return textEncrypt;
};

export const compareEncrypt = async (text, keyEncrypt) => {
    const isSuccess = await compare(text, keyEncrypt);
    return isSuccess;
}