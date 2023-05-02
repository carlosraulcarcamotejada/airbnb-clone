import prisma from "@/app/libs/prismadb";
import { Listing } from "@prisma/client";

const getListings = async (): Promise<Listing[]> => {
  try {
    const listings: Listing[] = await prisma.listing.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return listings;
  } catch (error: any) {
    throw new Error(error);
  }
};

export { getListings };
