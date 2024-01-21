"use server";

import { redirect } from "next/navigation";
import { createUser } from "../user-services";
import { prepareForm } from "./utils";

export const createUserAction = async (formData) => {
  const data = await prepareForm(formData);
  await createUser(data);

  redirect("/Login");
};
