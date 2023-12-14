import { existsSync, writeFileSync } from "fs";
import { responseRequestBad } from "../helper/urlhandle.js";
import { authentication, createUserService } from "../services/userService.js";
import __dirname from "../helper/__dirname.js";
import { join } from "path";
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const responseAuth = await authentication(email, password);
    res.send(responseAuth)
  } catch (error) {
    responseRequestBad(res, 400, error.message)
  }
};

export const createUser = async (req, res) => {
  try {
    const dataUser = req.body;
    dataUser.photo = req.file.originalname
    writeFileSync(join(__dirname,`/upload/${req.file.originalname}`),req.file.buffer)
    const response = await createUserService(dataUser);
    res.status(200).json({
      core:200,
      message:"user Created Success",
      data: response
    })
  } catch (error) {
    responseRequestBad(res, 400, error.message)
  }
}

export const avatar = async(req, res) => {
  try {
    const nameFile = req.params.name;
    if (existsSync(__dirname+`/upload/${nameFile}`)) {
      res.sendFile(__dirname+`/upload/${nameFile}`)
    }
  } catch (error) {
    
  }
}