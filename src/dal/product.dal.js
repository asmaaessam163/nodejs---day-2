const productModel = require("../models/product");

const createProduct = async (productData) => {
  try {
    await productModel.create([productData]);
  } catch (err) {
    console.log({err});
    throw err;
  }
};

const getProductsPaginated = async (pageNumber, pageSize, name) => {
  try {
    const products = await productModel.aggregate([
      {
        $match: {
          "name.en": name,
        },
      },
      {
        $skip: Number(pageNumber) * Number(pageSize),
      },
      {
        $limit: Number(pageSize),
      },
    ]);
    return products;
  } catch (err) {
    throw err;
  }
};

const getProducts = async () => {
  try {
    const products = await productModel.aggregate([
      {
        $project: {
          __v: 0,
          _id: 0,
        },
      },
    ]);
    return products;
  } catch (err) {
    console.log({err});
    throw err;
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProductsPaginated,
};

// cart //get-all remove
// add-to-cart
