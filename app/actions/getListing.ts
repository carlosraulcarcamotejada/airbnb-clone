import prisma from "@/app/libs/prismadb";
import { Listing } from "@prisma/client";
import { SafeListings } from "../types";

const getListings = async () => {
  try {
    const listings: Listing[] = await prisma.listing.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }))
    return safeListings;
  } catch (error: any) {
    throw new Error(error);
  }
};

export { getListings };
