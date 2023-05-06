"use client";
import { FC, useMemo } from "react";
import { useCountries } from "@/app/hooks/useCountries";
import { SafeListings, SafeUser } from "@/app/types";
import { Reservation } from "@prisma/client";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import Image from "next/image";
import { HeartButton } from "../HeartButton";
import { Button } from "../Button";

interface ListingCardProps {
  actionId?: string;
  actionLabel?: string;
  currentUser: SafeUser | null;
  data: SafeListings;
  disabled?: boolean;
  onAction?: (id: string) => void;
  reservation?: Reservation;
}

const ListingCard: FC<ListingCardProps> = ({
  actionId = "",
  actionLabel,
  currentUser,
  data,
  disabled,
  onAction,
  reservation,
}): JSX.Element => {
  const router = useRouter();
  const { getByValue } = useCountries();

  const location = getByValue(data.locationValue);

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (disabled) return;
    onAction?.(actionId);
  };

  const price = useMemo(() => {
    return reservation ? reservation.totalPrice : data.price;
  }, [reservation, data.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) return null;
    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);
    return `${format(start, "pp")} - ${format(end, "pp")}`;
  }, [reservation]);

  return (
    <div
      onClick={() => router.push(`/listings/${data.id}`)}
      className="col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
                    aspect-square
                    overflow-hidden
                    relative
                    rounded-xl
                    w-full
                    "
        >
          <Image
            fill
            alt="listing"
            src={data.imageSrc}
            className="
                        group-hover:scale-110
                        h-full
                        object-cover
                        transition
                        w-full
                    "
          />
          <div className="absolute top-3 right-3">
            <HeartButton listingId={data.id} currentUser={currentUser} />
          </div>
        </div>
        <div className="font-semibold text-lg">
          {location?.region}, {location?.label}
        </div>
        <div className="font-light text-neutral-500">
          {reservationDate || data.category}
        </div>
        <div className="flex items-center gap-1">
          <div className="font-semibold">${price}</div>
          {!reservation && <div className="font-light">night</div>}
        </div>
        {onAction && actionLabel && (
          <Button
            disable={disabled}
            small
            label={actionLabel}
            onClick={handleCancel}
          />
        )}
      </div>
    </div>
  );
};

export { ListingCard };
