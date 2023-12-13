import { authentication } from "../services/userService.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email);
    if (req.body.email === undefined || req.body.email === null) {
      res.send("email not is value");
    }
    if (req.body.password === undefined || req.body.email === null) {
        res.send("password not is value");
    }
    const responseAuth = await authentication(email, password);
    res.send(responseAuth)
  } catch (error) {
    res.send(error);
  }
};
