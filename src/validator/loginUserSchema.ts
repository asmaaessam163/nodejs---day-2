import { string, object } from "yup";

export const loginUserSchema = object({
  password: string().required(),
  userName: string().required()
});
