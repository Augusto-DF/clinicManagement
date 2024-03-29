import { NextResponse } from "next/server";
import { createUser } from "./service";
//import { hashPassword } from "../utils";

// api/user/create
export const POST = async (req) => {
  const body = await req.json();

  console.log("body", body);

  /* TODO: Some validations */
  // body.password = await hashPassword(body.password);
  // bodyValidation()

  const res = await createUser(body);

  return res.OK
    ? NextResponse.json({ messege: res.message }, { status: 200 })
    : NextResponse.json({ messege: res.message, error: true }, { status: 400 });
};
