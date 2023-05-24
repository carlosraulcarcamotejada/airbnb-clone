"use client";
import { useCountries } from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import { FC } from "react";
import { IconType } from "react-icons";
import { Avatar } from "../Avatar";
import { ListingCategory } from "./ListingCategory";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("../Map"), { ssr: false });

interface ListingInfoProps {
  bathroomCount: number;
  category: { icon: IconType; label: string; description: string } | undefined;
  description: string;
  guestCount: number;
  locationValue: string;
  roomCount: number;
  user: SafeUser;
}

const ListingInfo: FC<ListingInfoProps> = ({
  bathroomCount,
  category,
  description,
  guestCount,
  locationValue,
  roomCount,
  user,
}): JSX.Element => {
  const { getByValue } = useCountries();

  const coordinates = getByValue(locationValue)?.latlng;

  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap2">
        <div
          className="
                    text-xl
                    font-semibold
                    flex
                    items-center
                    gap-2        
                    "
        >
          <div className="dark:text-neutral-300">Hosted by {user?.name}</div>
          <Avatar src={user?.image} />
        </div>
        <div
          className="
                    flex
                    items-center
                    gap-4
                    font-light
                    text-neutral-500
                    dark:text-neutral-400
                    "
        >
          <div>{guestCount} Guests</div>
          <div>{roomCount} Rooms</div>
          <div>{bathroomCount} Bathroom</div>
        </div>
      </div>
      <hr className="dark:border-neutral-700" />
      {category && (
        <ListingCategory
          description={category.description}
          icon={category.icon}
          label={category.label}
        />
      )}
      <hr className="dark:border-neutral-700" />
      <div className="text-lg font-light text-neutral-500 dark:text-neutral-400">{description}</div>
      <hr className="dark:border-neutral-700" />
      <Map center={coordinates} />
    </div>
  );
};

export { ListingInfo };
