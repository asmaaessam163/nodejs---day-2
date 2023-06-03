const productDal = require("../dal/product.dal");

const createProduct = async (productData) => {
  try {
    await productDal.createProduct(productData);
  } catch (err) {
    throw err;
  }
};

const getProducts = async () => {
  try {
    const products = await productDal.getProducts();
    return products;
  } catch (err) {
    throw err;
  }
};

const getProductsPaginated = async (pageNumber, pageSize, name) => {
  try {
    const products = await productDal.getProductsPaginated(
      pageNumber,
      pageSize,
      name
    );
    return products;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProductsPaginated,
};
