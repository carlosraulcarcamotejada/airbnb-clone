"use client";
import React, { FC } from "react";
import { Logo } from "./Logo";
import { Search } from "./Search";
import { Container } from "../Container";
import { UserMenu } from "./UserMenu";
import { SafeUser } from "@/app/types";
import { Categories } from "./Categories";


interface NavbarProps {
  currentUser?: SafeUser | null;
}


const Navbar: FC<NavbarProps> = ({currentUser}): JSX.Element => {
  return (
    <div
      className="
              bg-white 
              border-b-2
              fixed 
              py-4 
              shadow-sm 
              w-full 
              z-10 
              "
    >
      <Container>
        <div
          className="
                    flex 
                    gap-3 
                    items-center 
                    justify-between 
                    md:gap-0
                    "
        >
          <Logo />
          <Search />
          <UserMenu currentUser={currentUser} />
        </div>
      </Container>
      <Categories />
    </div>
  );
};

export { Navbar };
