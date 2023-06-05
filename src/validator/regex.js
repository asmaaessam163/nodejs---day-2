const MOBILE_NUMBER_REGEX = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}$/;

const PASSWORD_REGEX =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=.\-_*])([a-zA-Z0-9@#$%^&+=*.\-_]){3,}$/;

module.exports = {
  MOBILE_NUMBER_REGEX,
  PASSWORD_REGEX,
};
