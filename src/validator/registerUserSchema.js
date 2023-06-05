const yup = require("yup");
const {MOBILE_NUMBER_REGEX, PASSWORD_REGEX} = require("./regex");

const registerUserSchema = yup.object({
  name: yup.string().required("name must be required"),
  email: yup.string().email().required(),
  password: yup.string().matches(PASSWORD_REGEX, "Invalid Password").required(),
  mobileNumber: yup
    .string()
    .matches(MOBILE_NUMBER_REGEX, "Invalid Mobile Number")
    .required(),
  userName: yup.string().required(),
});

module.exports = {
  registerUserSchema,
};
