import { API_HOST } from "@/app/api/utils";
import { prepareForm } from "./utils";

export const loginAction = async (formData) => {
  const data = prepareForm(formData);

  console.log("data", data);

  const response = await fetch(`${API_HOST}api/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const user = await response.json();
  console.log("user", user);
  return user;
};
