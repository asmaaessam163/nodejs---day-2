const mongoose = require("mongoose");

const initDB = async (callback) => {
  try {
    await mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
      bufferCommands: false,
    });
    callback();
  } catch (err) {
    console.log({err});
    callback(err);
  }
};

exports.initDB = initDB;
