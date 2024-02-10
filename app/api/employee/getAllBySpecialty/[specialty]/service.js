import { db } from "@/app/api/api-configs";
import { dbResponse } from "@/app/api/utils";

export const getEmployeesListBySpecialty = async (specialty) => {
  const query =
    specialty === "all"
      ? ` SELECT * FROM employees`
      : `
        SELECT * FROM employees
            WHERE specialty=@specialty
    `;

  const employees = db.prepare(query).all({ specialty });

  return dbResponse(employees.length > 0, { employees });
};
