import { NextResponse } from "next/server";
import { getEmployees } from "./service";

export const GET = async (req) => {
  const res = await getEmployees();

  return res.OK
    ? NextResponse.json({ employees: res.employees }, { status: 200 })
    : NextResponse.json({ messege: res.message, error: true }, { status: 400 });
};
