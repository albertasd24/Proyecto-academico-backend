import { responseRequestBad } from "../helper/urlhandle.js";
import { authentication, createUserService } from "../services/userService.js";

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