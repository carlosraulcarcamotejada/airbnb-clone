"use client";
import { FC, useMemo, useState, useCallback, useEffect } from "react";
import { SafeListing, SafeUser, SafeReservation } from "@/app/types";

import { Container } from "@/app/components/Container";
import { ListingHead } from "@/app/components/listings/ListingHead";
import { ListingInfo } from "@/app/components/listings/ListingInfo";
import { useLoginModal } from "@/app/hooks/useLoginModal";
import { useRouter } from "next/navigation";
import { differenceInCalendarDays, eachDayOfInterval } from "date-fns";
import axios from "axios";
import toast from "react-hot-toast";
import { ListingReservation } from "@/app/components/listings/ListingReservation";
import { Range } from "react-date-range";
import { categories_array } from "@/app/components/navbar/Categories";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

interface ListingClientProps {
  currentUser?: SafeUser | null;
  listing: SafeListing & { user: SafeUser };
  reservations?: SafeReservation[];
}

const ListingClient: FC<ListingClientProps> = ({
  listing,
  currentUser,
  reservations = [],
}): JSX.Element => {
  const loginModal = useLoginModal();
  const router = useRouter();

  const disabledDates = useMemo(() => {
    let dates: Date[] = [];
    reservations.forEach((reservation) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.startDate),
        end: new Date(reservation.endDate),
      });

      dates = [...dates, ...range];
    });

    return dates;
  }, [reservations]);

  const [isLoading, setIsLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(listing.price);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);

  const onCreateReservarion = useCallback(async () => {
    try {
      if (!currentUser) return loginModal.onOpen();
      setIsLoading(true);
      await axios.post("/api/reservations", {
        totalPrice,
        startDate: dateRange.startDate,
        endDate: dateRange.endDate,
        listingId: listing.id,
      });
      toast.success("Listing reserved!");
      setDateRange(initialDateRange);
      router.push('/trips')
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  }, [
    currentUser,
    dateRange.endDate,
    dateRange.startDate,
    listing.id,
    loginModal,
    router,
    totalPrice,
  ]);

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInCalendarDays(
        dateRange.endDate,
        dateRange.startDate
      );

      dayCount && listing.price
        ? setTotalPrice((dayCount + 1) * listing.price)
        : setTotalPrice(listing.price);
    }
  }, [dateRange.endDate, dateRange.startDate, listing.price]);

  const category = useMemo(() => {
    return categories_array.find((category) => category.label === listing.category);
  }, [listing.category]);

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <ListingHead
            currentUser={currentUser}
            id={listing.id}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            title={listing.title}
          />
          <div
            className="
                        grid
                        grid-cols-1
                        mt-6
                        md:gap-10
                        md:grid-cols-7
                        "
          >
            <ListingInfo
              bathroomCount={listing.bathroomCount}
              category={category}
              description={listing.description}
              guestCount={listing.guestCount}
              locationValue={listing.locationValue}
              roomCount={listing.roomCount}
              user={listing.user}
            />
            <div className="order-first mb-10 md:order-last md:col-span-3">
              <ListingReservation
                dateRange={dateRange}
                disabled={isLoading}
                disabledDates={disabledDates}
                onChangeDate={(value) => setDateRange(value)}
                onSubmit={onCreateReservarion}
                price={listing.price}
                totalPrice={totalPrice}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export { ListingClient };
