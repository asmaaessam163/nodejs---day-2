import express from "express";
import fs from "fs";
import path from "path";
import { type Request, type Response, type NextFunction } from "express";

export const routes = express.Router();

const submitNewProduct = (req: Request, res: Response, next: NextFunction) => {
  console.log({body: req.body});
  fs.readFile("products.json", (err, data) => {
    if (err) throw err;
    let parsedData = [];
    if (data) {
      parsedData = JSON.parse(String(data));
    }
    parsedData.push(req.body);

    fs.writeFile("products.json", JSON.stringify(parsedData), () => {
      res.send("Product Created Successfully");
    });
  });
};

const addNewProduct = (_req: Request, res: Response) => {
  // res.send(
  //   `<html><head><title>Add Product Form</title></head><body><form method="POST" action="/admin/add-product"><input name="name" type="text" /><button type="submit">Create Product</button></form></body></html>`
  // );
  res.sendFile(path.join(__dirname, "..", "..", "views", "add-product.html"));
};

routes.get("/add-product", addNewProduct);
routes.post("/add-product", submitNewProduct);