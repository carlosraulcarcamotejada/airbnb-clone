import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import { getCurrentUser } from "@/app/actions/getCurrentUser";

const POST = async (request: Request) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return NextResponse.error();

  const body = await request.json();

  const { endDate, listingId, startDate, totalPrice } = body;

  if (!endDate || !listingId || !startDate || !totalPrice) {
    return NextResponse.error();
  }

  const listingAndReservation = await prisma.listing.update({
    where: {
      id: listingId,
    },
    data: {
      reservations: {
        create: {
          endDate,
          startDate,
          totalPrice,
          userId: currentUser.id,
        },
      },
    },
  });

  return NextResponse.json(listingAndReservation);
};

export { POST };
