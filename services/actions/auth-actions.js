"use client";

import { prepareForm } from "./utils";
import { signIn } from "next-auth/react";

export const loginAction = async (formData) => {
  const data = prepareForm(formData);
  const response = await signIn("credentials", { redirect: false, ...data });

  console.log("response", response);
  return response;
};
