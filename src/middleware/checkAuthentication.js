const {verfiyToken} = require("../auth");

const checkAuthentication = (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    res.statusCode = 401;
    res.send("User is not Authenticated");
  }
  try {
    token = token.split(" ")[1];
    verfiyToken(token);
    next();
  } catch (err) {
    res.statusCode = 401;
    res.send(err.message);
  }
};

module.exports = {
  checkAuthentication,
};
