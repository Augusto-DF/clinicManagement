import { hash, compare } from "bcryptjs";

export const hashPassword = async (password) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

export const comparePassword = async (password, hashedPassword) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};

/**
 * @param {boolean} condition - Condition to return an error or the db response
 * @param {object} response - Db response ( it SHOULD BE an object ).
 * @param {string} errorMessage - Error message.
 * @default errorMessage - "Something is wrong, try again please"
 * @returns {object} An object that can have an error or a db response
 */
export const dbResponse = (
  condition,
  response,
  errorMessage = "Something is wrong, try again please"
) => {
  return condition
    ? { OK: true, ...response }
    : { OK: false, message: new Error(errorMessage) };
};

/**
 * @param {Request} req - An request.
 * @returns {object} An object with all params passed in url.
 */
export const getUrlParams = (req) => {
  const resultData = {};

  for (const [key, value] of req.nextUrl.searchParams.entries()) {
    resultData[key] = value;
  }

  return resultData;
};
