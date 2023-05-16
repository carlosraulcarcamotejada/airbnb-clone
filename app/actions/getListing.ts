import prisma from "@/app/libs/prismadb";
import { Listing } from "@prisma/client";

export interface IListingParams {
  userId?: string;
}

const getListings = async (params: IListingParams) => {
  try {
    const { userId } = params;

    let query: any = {};

    userId && (query.userId = userId);

    const listings: Listing[] = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    });
    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));
    return safeListings;
  } catch (error: any) {
    throw new Error(error);
  }
};

export { getListings };
