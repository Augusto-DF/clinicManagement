import sql from "better-sqlite3";

const db = sql("clinic_management.db");

export const getEmployeeById = async (id) => {
  const query = `
        SELECT * FROM employees WHERE (id=@id)
    `;

  const res = db.prepare(query).get(id);

  return res.id
    ? { OK: true, employee: res }
    : { OK: false, message: new Error("Something is wrong, try again please") };
};
