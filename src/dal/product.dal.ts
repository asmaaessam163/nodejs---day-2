import productModel from "../models/product";
import { Product } from "../types/product";


export const createProduct = async (productData: Omit<Product, 'productId'> ): Promise<void> => {
  try {
    await productModel.create([productData]);
  } catch (err) {
    console.log({err});
    throw err;
  }
};

export const getProductsPaginated = async (pageNumber: number, pageSize: number, name: string): 
Promise<Product[]> => {
  try {
    const products: Product[] = await productModel.aggregate([
      {
        $match: {
          "name.en": RegExp(`/${name}/`, 'i'),
        },
      },
      {
        $skip: pageNumber * pageSize,
      },
      {
        $limit: pageSize,
      },
    ]);
    return products;
  } catch (err) {
    throw err;
  }
};

export const getProducts = async (): Promise<Product[]> => {
  try {
    const products: Product[] = await productModel.aggregate([
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
