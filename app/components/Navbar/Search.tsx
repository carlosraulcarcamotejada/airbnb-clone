"use client";
import { FC } from "react";
import {BiSearch} from "react-icons/bi"

const Search: FC = (): JSX.Element => {
  return (
    <div className="border w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition duration-150 cursor-pointer">
    <div className="flex items-center justify-between">
      <div className="text-sm font-semibold px-6 ">Anywhere</div>
      <div className="hidden sm:block text-sm font-semibold px-6 border-x flex-1 text-center">
        Any Week
      </div>
      <div className="text-sm pl-6 pr-2 text-gray-600 flex items-center gap-3">
        <div className="hidden sm:block">Add Guest</div>
        <div className="p-2 bg-rose-500 rounded-full text-white"> <BiSearch size={18} /> </div>
      </div>
    </div>
    </div>);
};

export { Search };
