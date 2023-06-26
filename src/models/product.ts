import { v4 } from "uuid"
import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      unique: true,
      index: true,
      default: v4,
      required: true,
    },
    name: {
      en: {
        type: String,
        required: true
      },
      ar: {
        type: String,
        required: true
      },
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
      required: true
    },
    discount: {
      type: Number,
    },
    discountType: {
      type: String,
      enum: ["FIXED", "PERCENTAGE"],
    },
    description: {
      type: String,
    },
    categoryId: {
      type: String,
    },
    totalCount: {
      type: Number,
      required: true
    },
    avaliable: {
      type: Boolean,
      default: true,
      required: true
    },
  },
  {timestamps: {createdAt: true, updatedAt: true}}
);

const productModel = mongoose.model("Product", productSchema, "products");

export default productModel;

