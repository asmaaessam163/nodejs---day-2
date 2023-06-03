const productService = require("../services/product.service");

const createProduct = async (req, res) => {
  console.log({body: req.body});
  await productService.createProduct(req.body);
  res.statusCode = 201;
  res.send("Product is created Successfully");
};

const getProducts = async (req, res) => {
  const products = await productService.getProducts();
  res.statusCode = 200;
  res.send(products);
};

// Query String
// http://localhost:3000/product?name=asmaa&age=27

// Query Paramaters
// http://localhost:3000/produc/:productId

const getProductsPaginated = async (req, res) => {
  const query = req.query;

  //Validator

  try {
    //TODO: pageSiza & pageNumber
    const products = await productService.getProductsPaginated(
      req.query.pageNumber ?? 0,
      req.query.pageSize ?? 10,
      req.query.name ?? ""
    );
    res.statusCode = 200;
    res.send(products);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProductsPaginated,
};
