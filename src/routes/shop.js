const express = require("express");
const fs = require("fs");
const routes = express.Router();

routes.get("/products", (req, res, next) => {
  fs.readFile("products.json", (err, data) => {
    const parsedData = data ? JSON.parse(data) : [];
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

exports.routes = routes;
