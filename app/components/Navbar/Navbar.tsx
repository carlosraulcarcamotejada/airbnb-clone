"use client";
import { FC } from "react";
import { SafeUser } from "@/app/types";
import { Categories } from "./Categories";
import { Logo } from "./Logo";
import { Search } from "./Search";
import { UserMenu } from "./UserMenu";


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
              dark:bg-neutral-900
              "
    >
      <div
        className="
                  border-b
                  flex 
                  gap-3
                  items-center
                  justify-between 
                  py-3.5
                  px-4
                  md:gap-0
                  md:px-3
                  lg:px-12
                  dark:border-b-neutral-700
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
