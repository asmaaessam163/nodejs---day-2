import { User } from "../types/user";

import { generateToken } from "../auth";
import * as userDal from "../dal/user.dal";
import { encryptString, decryptString } from "../encryption";

export const registerUser = async (userData: Omit<User, 'userID'>) => {
  try {
    // TODO: get user by userName if exists ? throw validation error with descriptive msg : create user

    const existedUser = await userDal.getUser({ userName: userData.userName });
    if (existedUser) throw "UserName already exists";

    const encryptedPassword = encryptString(userData.password);
    const users = await userDal.registerUser({
      ...userData,
      password: encryptedPassword?? ""
    });
    const token = generateToken({ ...users[0] });
    return token;
  } catch (err) {
    console.log({ err });
    throw err;
  }
};

export const login = async ({ userName, password }: {userName: string, password: string}) => {
  const user = await userDal.getUser({ userName });
  if (!user) throw "Invalid userName";

  // decrypt lel password
  const decryptedPassword = decryptString(user.password);

  console.log({ decryptedPassword, password });

  if (decryptedPassword !== password) throw "Invalid password";

  // Generate Token
  const token = generateToken(user);
  return token;
};