import { API_HOST, DEFAULT_HEADERS } from "@/app/api/utils";
import { prepareForm } from "./utils";

export const loginAction = async (formData) => {
  const data = prepareForm(formData);

  const response = await fetch(`${API_HOST}api/auth`, {
    method: "POST",
    DEFAULT_HEADERS,
    body: JSON.stringify(data),
  });

  const user = await response.json();
  return user;
};
