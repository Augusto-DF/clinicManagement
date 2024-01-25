import { API_HOST, DEFAULT_HEADERS } from "@/app/api/utils";
import { prepareForm } from "./utils";

export const loginAction = async (formData) => {
  const data = prepareForm(formData);

  console.log("data", data);

  const response = await fetch(`${API_HOST}api/auth`, {
    method: "POST",
    DEFAULT_HEADERS,
    body: JSON.stringify(data),
  });

  const user = await response.json();
  console.log("user", user);
  return user;
};
