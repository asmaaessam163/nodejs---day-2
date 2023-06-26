import userModel from "../models/user";
import { User, UserFilter } from "../types/user";


export const registerUser = async (userData: Omit<User, 'userId'>): Promise<User[]> => {
  const user = await userModel.create([userData]);
  return (user as unknown as User[]);
};

export const getUser = async (filter: UserFilter): Promise<User> => {
  try {
    const user = await userModel.findOne(filter).lean();
    return (user as unknown as User);
  } catch (err) {
    throw err;
  }
};