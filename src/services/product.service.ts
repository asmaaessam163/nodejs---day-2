import { Product } from "../types/product";
import * as productDal from '../dal/product.dal';

export const createProduct = async (productData: Omit<Product, 'productId'>) => {
  try {
    await productDal.createProduct(productData);
  } catch (err) {
    throw err;
  }
};

export const getProducts = async (): Promise<Product[]> => {
  try {
    const products = await productDal.getProducts();
    return products;
  } catch (err) {
    throw err;
  }
};

export const getProductsPaginated = async (pageNumber: number, pageSize: number, name: string) => {
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

