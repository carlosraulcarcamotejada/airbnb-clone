import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";

const POST = async (request: Request) => {
  const body = await request.json();
  const { email, name, password } = body;

  const emailLC = email.toLowerCase();

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email:emailLC,
      name,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
};

export { POST };
