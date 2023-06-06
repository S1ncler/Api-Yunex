import { Request, Response } from "express";
import {
  loginUser,
  registerNewUser,
  verify_log,
} from "../services/auth.service";

export const registerCtrl = async ({ body }: Request, res: Response) => {
  try {
    const response = await registerNewUser(body);
    res.status(200).json({ msg: response });
  } catch (e) {
    res.status(400).json({ error: `BAD_REQUEST=${e}` });
    console.log(e);
  }
};

export const loginCtrl = async ({ body }: Request, res: Response) => {
  try {
    const { email, password } = body;
    const response = await loginUser(email, password);
    response === "INCORRECT_USER_DATA"
      ? res.status(401).json({msg: response})
      : res.status(200).json({msg: response});
  } catch (e) {
    res.status(400).json({ error: `BAD_REQUEST=${e}` });
    console.log(e);
  }
};

export const verifyLog = async ({ body }: Request, res: Response) => {
  try {
    const { token } = body;
    const response = await verify_log(token);
    res.status(200).json({msg: response});
  } catch (e) {
    res.status(400).json({ error: `BAD_REQUEST=${e}` });
    console.log(e);
  }
};
