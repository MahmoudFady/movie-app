const isInvalidInput = (name, value) => {
  if (value.trim() == "") {
    return `${name} is required`;
  }
  return false;
};
const isInvalidName = (name) => {
  const isInvalid = isInvalidInput("name", name);
  if (isInvalid) {
    return isInvalid;
  }
  if (name.length < 2) {
    return "name must be more than 2 chars";
  }
  return false;
};
const isInvalidEmail = (email) => {
  const isInvalid = isInvalidInput("email", email);
  if (isInvalid) {
    return isInvalid;
  }
  const emailRegExp = new RegExp(
    /^([a-zA-Z]{1,21}[0-9]{0,10}@(gmail|yahoo)\.com)$/
  );
  if (!emailRegExp.test(email)) {
    return "invalid email ex : abc@gmail.com";
  }
  return false;
};
const isInvalidPhone = (phone) => {
  const isInvalid = isInvalidInput("phone", phone);
  if (isInvalid) {
    return isInvalid;
  }
  const phoneRegExp = new RegExp(/^(01)[0125][0-9]{8}$/);
  if (!phoneRegExp.test(phone)) {
    return "invalid phone number";
  }
  return false;
};
const isInvalidPassword = (password) => {
  const isInvalid = isInvalidInput("password", password);
  if (isInvalid) {
    return isInvalid;
  }
  if (password.length <= 6) {
    return "passowrd must be more than 6 chars";
  }
  return false;
};
const handleInputError = (name, value) => {
  if (name === "name") return isInvalidName(value);
  else if (name === "email") return isInvalidEmail(value);
  else if (name === "phone") return isInvalidPhone(value);
  else if (name === "password") return isInvalidPassword(value);
};
export { handleInputError };
