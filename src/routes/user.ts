import express from "express";
import * as userController from "../controllers/user.controller";
import { registerUserSchema } from "../validator/registerUserSchema";
import { loginUserSchema } from "../validator/loginUserSchema";
import { type Request, type Response, type NextFunction } from "express";
export const routes = express.Router();

routes.post(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const test = await registerUserSchema.validate(req.body);
      console.log({ test });
      next();
    } catch (err: any) {
      res.statusCode = 400;
      res.send(err.message);
    }
  },
  userController.registerUser
);

routes.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await loginUserSchema.validate(req.body);
      next();
    } catch (err: any) {
      res.statusCode = 400;
      res.send(err.message);
    }
  },
  userController.login
);

