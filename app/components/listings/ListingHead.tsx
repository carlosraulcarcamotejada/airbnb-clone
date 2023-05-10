"use client";
import { useCountries } from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import { FC } from "react";
import { Heading } from "../Heading";
import Image from "next/image";
import { HeartButton } from "../HeartButton";

interface ListingHeadProps {
  currentUser?: SafeUser | null;
  id: string;
  imageSrc: string;
  locationValue: string;
  title: string;
}

const ListingHead: FC<ListingHeadProps> = ({
  currentUser,
  id,
  imageSrc,
  locationValue,
  title,
}) => {
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);

  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <div
        className="
                    h-[60vh]
                    overflow-hidden
                    relative
                    rounded-xl
                    w-full
                    "
      >
        <Image
          priority
          alt="image"
          src={imageSrc}
          fill
          className="object-cover w-full"
        />
        <div className="absolute top-5 right-5">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};

export { ListingHead };
