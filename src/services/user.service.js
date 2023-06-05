const {generateToken} = require("../auth");
const userDal = require("../dal/user.dal");
const {encryptString, decryptString} = require("../encryption");

const registerUser = async (userData) => {
  try {
    // TODO: get user by userName if exists ? throw validation error with descriptive msg : create user

    const existedUser = await userDal.getUser({userName: userData.userName});
    if (existedUser) throw "UserName already exists";

    const encryptedPassword = encryptString(userData.password);
    const users = await userDal.registerUser({
      ...userData,
      password: encryptedPassword,
    });
    const token = generateToken({...users[0]});
    return token;
  } catch (err) {
    console.log({err});
    throw err;
  }
};

const login = async ({userName, password}) => {
  try {
    const user = await userDal.getUser({userName});
    if (!user) throw "Invalid userName";

    // decrypt lel password
    const decryptedPassword = decryptString(user.password);

    console.log({decryptedPassword, password});

    if (decryptedPassword !== password) throw "Invalid password";

    // Generate Token
    const token = generateToken(user);
    return token;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  registerUser,
  login,
};
