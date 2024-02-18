import { db } from "../../../api-configs";

export const getEmployeeByUserId = async (id) => {
  const query = `
        SELECT * FROM employees WHERE (userId=@id)
    `;

  const res = db.prepare(query).get(id);

  return res.id
    ? { OK: true, employee: res }
    : { OK: false, message: new Error("Something is wrong, try again please") };
};
