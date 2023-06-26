import { object, string } from "yup";
import { MOBILE_NUMBER_REGEX, PASSWORD_REGEX } from "./regex";

export const registerUserSchema = object({
  name: string().required("name must be required"),
  email: string().email().required(),
  password: string().matches(PASSWORD_REGEX, "Invalid Password").required(),
  mobileNumber: string()
    .matches(MOBILE_NUMBER_REGEX, "Invalid Mobile Number")
    .required(),
  userName: string().required()
});
