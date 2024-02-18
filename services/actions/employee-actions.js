import { API_HOST, DEFAULT_HEADERS } from "@/app/api/api-configs";

export const getEmployeeByUserIdAction = async (id) => {
  const URL = `${API_HOST}/api/employee/getByUserId/${id}`;
  const response = await fetch(URL, { method: "GET", DEFAULT_HEADERS });

  const employee = await response.json();

  return employee;
};
