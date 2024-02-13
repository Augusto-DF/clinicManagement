import { db } from "../../api-configs";
import { dbResponse } from "../../utils";

export const getAppointmentsByUser = async (data) => {
  const query = `
      SELECT * FROM appointments 
        WHERE userId=@userId AND 
            scheduleDate >= @startDate AND 
            scheduleDate <= @endDate 
        ORDER BY scheduleDate ASC
    `;

  const appointments = db.prepare(query).all(data);

  return dbResponse(!!appointments, { appointments });
};
