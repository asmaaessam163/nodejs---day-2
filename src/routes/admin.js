const express = require("express");
const routes = express.Router();
const fs = require("fs");
const path = require("path");

const submitNewProduct = (req, res, next) => {
  console.log({body: req.body});
  fs.readFile("products.json", (err, data) => {
    let parsedData = [];
    if (data) {
      parsedData = JSON.parse(data);
    }
    parsedData.push(req.body);

    fs.writeFile("products.json", JSON.stringify(parsedData), () => {
      res.send("Product Created Successfully");
    });
  });
};

const addNewProduct = (_req, res) => {
  // res.send(
  //   `<html><head><title>Add Product Form</title></head><body><form method="POST" action="/admin/add-product"><input name="name" type="text" /><button type="submit">Create Product</button></form></body></html>`
  // );
  res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
};

routes.get("/add-product", addNewProduct);
routes.post("/add-product", submitNewProduct);

exports.routes = routes;
