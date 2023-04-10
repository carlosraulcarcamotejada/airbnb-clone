"use client";
import React, { FC } from "react";
import { Logo } from "./Logo";
import { Search } from "./Search";
import { Container } from "../Container";
import { UserMenu } from "./UserMenu";

const Navbar: FC = (): JSX.Element => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm py-4 border-b-2">
      <Container>
        <div className="flex items-center justify-between gap-3 md:gap-0">
          <Logo />
          <Search />
          <UserMenu />
        </div>
      </Container>
    </div>
  );
};

export { Navbar };
