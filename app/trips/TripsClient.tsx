"use client";
import { FC, useState, useCallback } from "react";
import { SafeReservation, SafeUser } from "../types";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { ListingCard } from "../components/listings/ListingCard";

interface TripsClientProps {
  currentUser?: SafeUser | null;
  reservations: SafeReservation[];
}

const TripsClient: FC<TripsClientProps> = ({ currentUser, reservations }) => {
  const router = useRouter();

  const [deletingId, setDeletingId] = useState("");

  const onCancel = useCallback(
    async (id: string) => {
      try {
        setDeletingId(id);
        await axios.delete(`/api/reservations/${id}`);
        toast.success("Reservation cancelled");
        router.refresh();
      } catch (error: any) {
        toast.error(error?.message);
      } finally {
        setDeletingId("");
      }
    },
    [router]
  );

  return (
    <Container>
      <Heading
        title="Trips"
        subtitle="Where you've been and where you're going."
      />
      <div
        className="
                    mt-10
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-4
                    xl:grid-cols-5
                    2xl:grid-cols-6
                    gap-8
                    "
      >
        {reservations.map((reservation) => (
          <ListingCard
            key={reservation.id}
            currentUser={currentUser}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            onAction={onCancel}
            disabled={deletingId === reservation.id}
            actionLabel="Cancel Reservation"
          />
        ))}
      </div>
    </Container>
  );
};

export { TripsClient };
