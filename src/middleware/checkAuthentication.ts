import {verfiyToken} from "../auth";
import { type NextFunction, type Request, type Response } from "express";

export const checkAuthentication = (req: Request, res: Response, next: NextFunction) => {
  let token = req.headers.authorization;
  if (!token) {
    res.statusCode = 401;
    res.send("User is not Authenticated");
  }
  try {
    token = token!.split(" ")[1];
    verfiyToken(token!);
    next();
  } catch (err: any) {
    res.statusCode = 401;
    res.send(err.message);
  }
};
