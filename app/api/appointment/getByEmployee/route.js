import { NextResponse } from "next/server";
import { getUrlParams } from "../../utils";
import { getAppointmentsByEmployee } from "./service";

export const GET = async (req) => {
  const params = getUrlParams(req);

  const res = await getAppointmentsByEmployee(params);

  return res.OK
    ? NextResponse.json({ appointments: res.appointments }, { status: 200 })
    : NextResponse.json({ message: res.message, error: true }, { status: 400 });
};
