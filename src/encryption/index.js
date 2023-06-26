const crypto = require("crypto");

const iVector = "1234567891234561"; // 16
//crypto.randomBytes(16).toString("hex")
const secretKey = "12345678912345611234567891234561"; // 32
// crypto.randomBytes(32).toString("hex");

const encryptString = (string) => {
  try {
    let encryptedString = "";
    const cipher = crypto.createCipheriv("aes-256-cbc", secretKey, iVector);
    encryptedString = cipher.update(string, "utf-8", "base64");
    encryptedString += cipher.final("base64");
    return encryptedString;
  } catch (err) {
    console.log({err});
  }
};

const decryptString = (encryptedString) => {
  let decryptedString = "";

  const decipher = crypto.createDecipheriv("aes-256-cbc", secretKey, iVector);
  decryptedString = decipher.update(encryptedString, "base64", "utf-8");
  decryptedString += decipher.final("utf-8");
  return decryptedString;
};

module.exports = {
  encryptString,
  decryptString,
};
