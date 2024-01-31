import { NextResponse } from "next/server";
import { authUser } from "./service";
import { User } from "../models/User/user";

// POST /api/auth:
export const POST = async (req) => {
  const body = await req.json();
  const res = await authUser(body);

  return res?.id
    ? NextResponse.json(new User({ ...res }).getUser(), {
        status: 200,
      })
    : NextResponse.json({ message: "User does not exists" }, { status: 404 });
};
