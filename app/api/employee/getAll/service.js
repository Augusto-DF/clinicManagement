import sql from "better-sqlite3";

const db = sql("clinic_management.db");

export const getEmployees = async () => {
  const query = `SELECT * FROM employees`;

  const res = db.prepare(query).all();

  return res.length > 0
    ? { OK: true, employees: res }
    : { OK: false, message: new Error("Something is wrong, try again please") };
};
