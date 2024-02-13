import { db } from "../../api-configs";
import { dbResponse } from "../../utils";

export const updateAppointment = async (data) => {
  const valuesToChange = Object.keys(data)
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
