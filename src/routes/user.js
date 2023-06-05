const express = require("express");
const userController = require("../controllers/user.controller");
const {registerUserSchema} = require("../validator/registerUserSchema");
const {loginUserSchema} = require("../validator/loginUserSchema");
const routes = express.Router();

routes.post(
  "/",
  async (req, res, next) => {
    try {
      const test = await registerUserSchema.validate(req.body);
      console.log({test});
      next();
    } catch (err) {
      res.statusCode = 400;
      res.send(err.message);
    }
  },
  userController.registerUser
);

routes.post(
  "/login",
  async (req, res, next) => {
    try {
      await loginUserSchema.validate(req.body);
      next();
    } catch (err) {
      res.statusCode = 400;
      res.send(err.message);
    }
  },
  userController.login
);

module.exports = routes;
