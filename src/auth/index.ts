import { sign, verify } from "jsonwebtoken";

const secretKey =
  "45a42948d356945cf2c362d8a1c80d43cfbf0b117f9843a17e20eccf47e1afee";
// crypto.randomBytes(32).toString("hex");

export const generateToken = (payload: Record<string, any >) => {
  const token = sign(payload, secretKey, {expiresIn: "120s"});
  return token;
};

export const verfiyToken = (token: string) => {
  verify(token, secretKey);
};
