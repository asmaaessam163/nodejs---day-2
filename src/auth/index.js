const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const secretKey =
  "45a42948d356945cf2c362d8a1c80d43cfbf0b117f9843a17e20eccf47e1afee";
// crypto.randomBytes(32).toString("hex");

const generateToken = (payload) => {
  const token = jwt.sign(payload, secretKey, {expiresIn: "120s"});
  return token;
};

const verfiyToken = (token) => {
  jwt.verify(token, secretKey);
};
module.exports = {
  generateToken,
  verfiyToken,
};
