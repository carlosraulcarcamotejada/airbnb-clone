import prisma from "@/app/libs/prismadb";

interface IParams {
  authoId?: string;
  listingId?: string;
  userId?: string;
}

const getReservations = async (params: IParams) => {
  try {
    const { authoId, listingId, userId } = params;

    const query: any = {};

    authoId && (query.listing = { userId: authoId });
    listingId && (query.listingId = listingId);
    userId && (query.userId = userId);

    const reservations = await prisma.reservation.findMany({
      where: query,
      include: {
        listing: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const safeReservation = reservations.map((reservation) => ({
      ...reservation,
      createdAt: reservation.createdAt.toISOString(),
      startDate: reservation.startDate.toISOString(),
      endDate: reservation.endDate.toISOString(),
      listing: {
        ...reservation.listing,
        createdAt: reservation.listing.createdAt.toISOString(),
      },
    }));

    return safeReservation;
  } catch (error: any) {
    throw new Error(error);
  }
};

export { getReservations };
