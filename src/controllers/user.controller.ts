import * as  userService from "../services/user.service";
import { type Request, type Response } from "express";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const token = await userService.registerUser(req.body);
    res.statusCode = 201;
    res.send({token});
  } catch (err) {
    res.statusCode = 400;
    res.send(err);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const token = await userService.login(req.body);
    res.statusCode = 200;
    res.send({token});
  } catch (err: any) {
    res.statusCode = 401;
    res.send(err.message);
  }
};
