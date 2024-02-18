import { hash, compare } from "bcryptjs";
import {
  formatISO,
  isFriday,
  isMonday,
  previousFriday,
  previousMonday,
} from "date-fns";

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

/**
 * @param {Date} dateObject - A date object to convert.
 * @returns The date as the ISO format yyyy-mm-dd HH:MM:SS.
 */
export const dateToISO = (dateObject) => {
  const date = formatISO(new Date(dateObject), { representation: "date" });
  const time = formatISO(new Date(dateObject), {
    representation: "time",
  }).substring(0, 8);

  return `${date} ${time}`;
};

/**
 * @param {Date} date - A date object.
 * @returns Today if it's monday.
 * @returns The last monday if today isn't monday.
 */
export const firstDayOfWeek = (date) => {
  const today = new Date(date);
  if (isMonday(today)) return today;

  return isMonday(today) ? today : previousMonday(today);
};

/**
 * @param {Date} date - A date object.
 * @returns Today if it's friday.
 * @returns The last friday if today isn't friday.
 */
export const lastDayOfWeek = (date) => {
  const today = new Date(date);
  if (isFriday(today)) return today;

  return isFriday(today) ? today : previousFriday(today);
};
