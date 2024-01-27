import { redirect } from "next/navigation";
import { prepareForm } from "./utils";
import { API_HOST, DEFAULT_HEADERS } from "@/app/api/api-configs";

export const createUserAction = async (formData) => {
  const data = prepareForm(formData);

  const response = await fetch(`${API_HOST}api/user/create`, {
    method: "POST",
    DEFAULT_HEADERS,
    body: JSON.stringify(data),
  });

  const res = await response.json();

  return res;
};
