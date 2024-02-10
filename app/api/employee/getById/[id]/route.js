import { NextResponse } from "next/server";
import { getEmployeeById } from "./service";

export const GET = async (req, { params: { id } }) => {
  const res = await getEmployeeById({ id });

  return res.OK
    ? NextResponse.json({ employee: res.employee }, { status: 200 })
    : NextResponse.json({ messege: res.message, error: true }, { status: 400 });
};
