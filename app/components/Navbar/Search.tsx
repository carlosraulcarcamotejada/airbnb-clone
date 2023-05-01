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
                    sm:block 
                    text-center
                    text-sm 
                    "
        >
          Any Week
        </div>
        <div
          className="
                    text-sm 
                    flex 
                    gap-3
                    items-center 
                    pl-6 
                    pr-2
                  text-gray-600 
                    "
        >
          <div
            className="
                      hidden 
                      sm:block
                      text-neutral-600
                      font-light
                      "
          >
            Add Guest
          </div>
          <div
            className="
                      p-2 
                      rounded-full 
                    bg-rose-500 
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
