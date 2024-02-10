import { NextResponse } from "next/server";
import { getEmployeesListBySpecialty } from "./service";

export const GET = async (req, { params: { specialty } }) => {
  const res = await getEmployeesListBySpecialty(specialty);

  return res.OK
    ? NextResponse.json({ employees: res.employees }, { status: 200 })
    : NextResponse.json({ messege: res.message, error: true }, { status: 400 });
};
