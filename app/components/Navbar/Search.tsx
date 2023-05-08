"use client";
import { FC } from "react";
import { BiSearch } from "react-icons/bi";

const Search: FC = (): JSX.Element => {
  return (
    <div
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
          Anywhere
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
          Any Week
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
            Add Guest
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
