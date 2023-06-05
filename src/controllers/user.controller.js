const userService = require("../services/user.service");

const registerUser = async (req, res) => {
  try {
    const token = await userService.registerUser(req.body);
    res.statusCode = 201;
    res.send({token});
  } catch (err) {
    res.statusCode = 400;
    res.send(err);
  }
};

const login = async (req, res) => {
  try {
    const token = await userService.login(req.body);
    res.statusCode = 200;
    res.send({token});
  } catch (err) {
    res.statusCode = 401;
    res.send(err.message);
  }
};

module.exports = {
  registerUser,
  login,
};
