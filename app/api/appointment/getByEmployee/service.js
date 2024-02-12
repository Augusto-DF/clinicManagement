import { db } from "../../api-configs";
import { dbResponse } from "../../utils";

export const getAppointmentsByEmployee = async (data) => {
  console.log("data", data);
  const query = `
    SELECT * FROM appointments 
        WHERE employeeId=@employeeId AND 
            scheduleDate >= @startDate AND 
            scheduleDate <= @endDate 
        ORDER BY scheduleDate ASC
    `;

  const appointments = db.prepare(query).all(data);

  return dbResponse(!!appointments, { appointments });
};

export const createAppointment = async (data) => {
  const query = `
        INSERT INTO appointments (userId, employeeId, scheduleDate, description)
            VALUES (@userId, @employeeId, @scheduleDate, @description)
    `;
};
