const yup = require("yup");

const loginUserSchema = yup.object({
  password: yup.string().required(),
  userName: yup.string().required(),
});

module.exports = {
  loginUserSchema,
};
