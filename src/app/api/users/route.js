import { NextResponse } from "next/server";
import prisma from "../../../../utils/prisma";

export async function GET() {
  try {
    const users = await prisma.user.findMany();

    return NextResponse.json({
      status: 200,
      data: users,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Error : " + error,
    });
  }
}
