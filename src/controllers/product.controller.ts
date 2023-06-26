import { type Request, type Response } from "express";
import * as productService from "../services/product.service";

export const createProduct = async (req: Request, res: Response) => {
  console.log({body: req.body});
  await productService.createProduct(req.body);
  res.statusCode = 201;
  res.send("Product is created Successfully");
};

export const getProducts = async (_req: Request, res: Response) => {
  const products = await productService.getProducts();
  res.statusCode = 200;
  res.send(products);
};

// Query String
// http://localhost:3000/product?name=asmaa&age=27

// Query Paramaters
// http://localhost:3000/produc/:productId

export const getProductsPaginated = async (req: Request, res: Response) => {
  const query = req.query;

  //TODO: Validator

  try {
    const products = await productService.getProductsPaginated(
      req.query.pageNumber ? Number(req.query.pageNumber) : 0,
      req.query.pageSize ? Number(req.query.pageSize) : 10,
      String(req.query.name) ?? ""
    );
    res.statusCode = 200;
    res.send(products);
  } catch (err) {
    throw err;
  }
};
