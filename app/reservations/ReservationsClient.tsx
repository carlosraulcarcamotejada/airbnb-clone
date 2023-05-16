"use client";
import { FC, useCallback, useState } from "react";
import { SafeReservation, SafeUser } from "../types";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { toast } from "react-hot-toast";
import { ListingCard } from "../components/listings/ListingCard";

interface ReservationsClientProps {
  currentUser?: SafeUser | null;
  reservations: SafeReservation[];
}

const ReservationsClient: FC<ReservationsClientProps> = ({
  currentUser,
  reservations,
}): JSX.Element => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");

  const onCancel = useCallback(
    async (id: string) => {
      try {
        setDeletingId(id);
        await axios.delete(`/api/reservations/${id}`);
        toast.success("Reservation cancelled");
        router.refresh();
      } catch (error) {
        toast.error("Something went wrong");
      } finally {
        setDeletingId("");
      }
    },
    [router]
  );

  return (
    <Container>
      <Heading title="Reservations" subtitle="Booking on your properties" />
      <div
        className="
                gap-8
                grid
                grid-cols-1
                mt-10
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
                xl:grid-cols-5
                2xl:grid-cols-6
                "
      >
        {reservations.map((reservation) => (
          <ListingCard
            actionId={reservation.id}
            data={reservation.listing}
            key={reservation.id}
            onAction={onCancel}
            reservation={reservation}
            disabled={deletingId === reservation.id}
            actionLabel="Cancel guest reservation"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export { ReservationsClient };
