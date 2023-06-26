import express from "express";
import * as  productHandler from "../controllers/product.controller";
import { type Request, type Response } from "express";
import {checkAuthentication} from "../middleware/checkAuthentication";

export const routes = express.Router();

routes.post("/", checkAuthentication, productHandler.createProduct);
routes.get("/", checkAuthentication, productHandler.getProducts);
routes.get(
  "/paginated",
  checkAuthentication,
  productHandler.getProductsPaginated
);
routes.get("/:productId", checkAuthentication, (req: Request, res: Response) => {
  const productId = req.params.productId;
});
