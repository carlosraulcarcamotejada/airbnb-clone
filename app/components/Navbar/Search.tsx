"use client";
import { FC, useMemo } from "react";
import { useCountries } from "@/app/hooks/useCountries";
import { useSearchModal } from "@/app/hooks/useSearchModal";
import { useSearchParams } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { differenceInDays } from "date-fns";

const Search: FC = (): JSX.Element => {
  const searchModal = useSearchModal();

  const params = useSearchParams();

  const { getByValue } = useCountries();

  const locationValue = params?.get("locationValue");
  const startDate = params?.get("startDate");
  const endDate = params?.get("endDate");
  const guestCount = params?.get("guestCount");

  const locationLabel = useMemo(() => {
    return locationValue
      ? getByValue(locationValue as string)?.label
      : "Anywhere";
  }, [getByValue, locationValue]);

  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate as string);
      const end = new Date(endDate as string);
      let diff = differenceInDays(end, start);

      diff === 0 && (diff = 1);

      return `${diff} Days`;
    }

    return "Any week";
  }, [endDate, startDate]);

  const guestLabel = useMemo(() => {
    return guestCount ? `${guestCount} Guests` : "Add guest";
  }, [guestCount]);

  return (
    <div
      onClick={searchModal.onOpen}
      className="
                border 
                cursor-pointer
                duration-150 
                hover:shadow-md 
                md:w-auto 
                py-2 
                rounded-full 
                shadow-sm
                transition 
                w-full
                "
    >
      <div
        className="
                  flex 
                  items-center 
                  justify-between
                  "
      >
        <div
          className="
                    font-semibold 
                    px-6
                    text-sm 
                    "
        >
          {locationLabel}
        </div>
        <div
          className="
                    border-x 
                    flex-1 
                    font-semibold
                    hidden 
                    px-6 
                    text-center
                    text-sm 
                    sm:block
                    "
        >
          {durationLabel}
        </div>
        <div
          className="
                    flex 
                    gap-3
                    items-center 
                    pl-6 
                    pr-2
                    text-sm 
                  text-gray-600 
                    "
        >
          <div
            className="
                      hidden 
                      text-neutral-600
                      font-light
                      sm:block
                      "
          >
            {guestLabel}
          </div>
          <div
            className="
                    bg-rose-500 
                      p-2 
                      rounded-full 
                      text-white
                      "
          >
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Search };
