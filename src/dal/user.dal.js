const userModel = require("../models/user");

const registerUser = async (userData) => {
  try {
    const user = await userModel.create([userData]);
    return user;
  } catch (err) {
    throw err;
  }
};

const getUser = async (filter) => {
  try {
    const user = await userModel.findOne(filter).lean();
    return user;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  registerUser,
  getUser,
};

// input (userName, password) >>> 1) get user By userName if exists?
//  >>> userObject (password (encrypted) >> decryption) === password(decrypted) ? generate token  : throw error
//  : sorry
