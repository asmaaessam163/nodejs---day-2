const mongoose = require("mongoose");
const uuid = require("uuid");

const userSchema = new mongoose.Schema(
  {
    userId: {
      default: uuid.v4,
      unique: true,
      index: true,
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
  },
  {timestamps: {createdAt: true, updatedAt: true}}
);

const userModel = mongoose.model("User", userSchema, "userss");

module.exports = userModel;
