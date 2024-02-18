import { API_HOST, DEFAULT_HEADERS } from "@/app/api/api-configs";
import { dateToISO, firstDayOfWeek, lastDayOfWeek } from "@/app/api/utils";

export const getAppointmentsByEmployeeAction = async (
  id,
  startDate = null,
  endDate = null
) => {
  const start = startDate
    ? dateToISO(startDate)
    : dateToISO(firstDayOfWeek(new Date().setHours(8, 0, 0)));

  const end = endDate
    ? dateToISO(endDate)
    : dateToISO(lastDayOfWeek(new Date().setHours(20, 0, 0)));

  const URL = `${API_HOST}/api/appointment/getByEmployee?employeeId=${id}&startDate=${start}&endDate=${end}`;

  const response = await fetch(URL, { method: "GET", DEFAULT_HEADERS });

  const { appointments } = await response.json();

  return appointments;
};
