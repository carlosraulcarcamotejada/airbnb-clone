import prisma from "@/app/libs/prismadb";
import { Listing } from "@prisma/client";

export interface IListingParams {
  userId?: string;
  guestCount?: number;
  roomCount?: number;
  bathroomCount?: number;
  startDate?: string;
  endDate?: string;
  locationValue?: string;
  category?: string;
}

const getListings = async (params: IListingParams) => {
  try {
    const {
      userId,
      bathroomCount,
      category,
      endDate,
      locationValue,
      startDate,
      guestCount,
      roomCount,
    } = params;

    let query: any = {};

    userId && (query.userId = userId);
    category && (query.category = category);
    roomCount && (query.roomCount = { gte: +roomCount });
    bathroomCount && (query.bathroomCount = { gte: +bathroomCount });
    guestCount && (query.guestCount = { gte: +guestCount });
    locationValue && (query.locationValue = locationValue);

    startDate &&
      endDate &&
      (query.NOT = {
        reservations: {
          some: {
            OR: [
              { endDate: { gte: startDate }, startDate: { lte: startDate } },
              { startDate: { lte: endDate }, endDate: { gte: endDate } },
            ],
          },
        },
      });

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
