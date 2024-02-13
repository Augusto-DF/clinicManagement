import { db } from "../../api-configs";
import { dbResponse } from "../../utils";

export const createAppointment = async (data) => {
  const query = `
          INSERT INTO appointments (userId, employeeId, scheduleDate, description)
              VALUES (@userId, @employeeId, @scheduleDate, @description)
      `;

  const res = db.prepare(query).run(data);

  return dbResponse(!!res, { message: "Appointment created" });
};
