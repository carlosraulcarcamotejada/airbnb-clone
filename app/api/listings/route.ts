import { getCurrentUser } from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

const POST = async (request: Request) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return NextResponse.error();

  const body = await request.json();

  const {
    bathroomCount,
    category,
    description,
    guestCount,
    imageSrc,
    location,
    price,
    roomCount,
    title,
  } = body;

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) NextResponse.error();
  });

  const listing = await prisma.listing.create({
    data: {
      bathroomCount,
      category,
      description,
      guestCount,
      imageSrc,
      locationValue: location.value,
      price: parseInt(price, 10),
      roomCount,
      title,
      userId: currentUser.id,
    },
  });
  return NextResponse.json(listing);
};

export { POST };
