"use client";
import { FC } from "react";
import { Logo } from "./Logo";
import { Search } from "./Search";
import { UserMenu } from "./UserMenu";
import { SafeUser } from "@/app/types";
import { Categories } from "./Categories";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: FC<NavbarProps> = ({ currentUser }): JSX.Element => {
  return (
    <div
      className="
              bg-white
              fixed 
              w-full 
              z-10 
              "
    >
      <div
        className="
                    border-b
                    flex 
                    gap-3
                    items-center
                    justify-between 
                    md:gap-0
                    py-3.5
                    px-4
                    sm:px-10
                    md:px-6
                    lg:px-20
      
                    "
      >
        <Logo />
        <Search />
        <UserMenu currentUser={currentUser} />
      </div>
      <Categories />
    </div>
  );
};

export { Navbar };
