import { db } from "../../api-configs";
import { dbResponse } from "../../utils";

export const updateAppointment = async (data) => {
  let valuesToChange = "";

  valuesToChange = Object.keys(data)
    .map((key) => {
      if (key !== "id") return `${key}=@${key}`;
    })
    .filter((element) => !!element)
    .join(", ");

  const query = `
    UPDATE appointments SET ${valuesToChange} WHERE id=@id
  `;

  const res = db.prepare(query).run(data);

  return dbResponse(!!res, { message: "Appointment updated" });
};

export const getAppointmentsByEmployee = async (data) => {
  updateAppointment({ id: 4, description: "test", employeeId: 4 });
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

export const createAppointment = async (data) => {
  const query = `
        INSERT INTO appointments (userId, employeeId, scheduleDate, description)
            VALUES (@userId, @employeeId, @scheduleDate, @description)
    `;

  const res = db.prepare(query).run(data);

  return dbResponse(!!res, { message: "Appointment created" });
};
