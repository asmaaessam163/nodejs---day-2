import mongoose from "mongoose";

export const initDB = async (callback: (err?: unknown) => void) => {
  try {
    await mongoose.connect(process.env.DATABASE_CONNECTION_STRING ?? "mongodb+srv://asmaaessam163:riQCZEzTpcz41YtD@shop.2m3nx8a.mongodb.net/shop", {
      bufferCommands: false,
    });
    callback();
  } catch (err) {
    console.log({err});
    callback(err);
  }
};
