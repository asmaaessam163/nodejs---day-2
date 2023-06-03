const express = require("express");
const productHandler = require("../controllers/product.controller");

const routes = express.Router();

routes.post("/", productHandler.createProduct);
routes.get("/", productHandler.getProducts);
routes.get("/paginated", productHandler.getProductsPaginated);
routes.get("/:productId", (req, res) => {
  const productId = req.params.productId;
});

module.exports = routes;
