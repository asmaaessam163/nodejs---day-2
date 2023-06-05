const express = require("express");
const productHandler = require("../controllers/product.controller");
const {checkAuthentication} = require("../middleware/checkAuthentication");

const routes = express.Router();

routes.post("/", checkAuthentication, productHandler.createProduct);
routes.get("/", checkAuthentication, productHandler.getProducts);
routes.get(
  "/paginated",
  checkAuthentication,
  productHandler.getProductsPaginated
);
routes.get("/:productId", checkAuthentication, (req, res) => {
  const productId = req.params.productId;
});

module.exports = routes;
