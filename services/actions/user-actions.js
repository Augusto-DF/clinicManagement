"use server";

import { redirect } from "next/navigation";
import { createUser, getUserByLogin } from "../user-services";
import { prepareForm } from "./utils";

export const createUserAction = async (formData) => {
  const data = prepareForm(formData);
  await createUser(data);

  redirect("/login");
};

export const login = async (formData) => {
  const data = prepareForm(formData);
  const user = await getUserByLogin(data);

  return user;
};
