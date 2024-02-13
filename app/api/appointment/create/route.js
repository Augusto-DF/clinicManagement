import { NextResponse } from "next/server";
import { createAppointment } from "./service";

export const POST = async (req) => {
  const body = await req.json();

  const res = await createAppointment(body);

  return res.OK
    ? NextResponse.json({ message: res.message }, { status: 200 })
    : NextResponse.json({ message: res.message, error: true }, { status: 400 });
};
