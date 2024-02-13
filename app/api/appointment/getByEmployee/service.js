import { db } from "../../api-configs";
import { dbResponse } from "../../utils";

export const getAppointmentsByEmployee = async (data) => {
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
