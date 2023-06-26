import express  from "express";
import fs  from "fs";
import { type Request, type Response, type NextFunction } from "express";

export const routes = express.Router();

routes.get("/products", (req: Request, res: Response, next: NextFunction) => {
  fs.readFile("products.json", (err, data) => {
    const parsedData = data ? JSON.parse(String(data)) : [];
    // res.send(
    //   `<html><head><title>Products List</title></head><body><h1>List of products ...</h1> <ul>${parsedData.map(
    //     (product) => `<li> product name is ${product.name}</li>`
    //   )}</ul> </form></body></html>`
    // );

    res.render("shop.pug", {
      products: parsedData,
    });
  });
});

