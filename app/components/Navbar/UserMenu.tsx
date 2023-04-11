"use client";
import { FC, useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Avatar } from "../Avatar";
import { MenuItem } from "./MenuItem";

const UserMenu: FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div
          onClick={() => {}}
          className="
                    hidden
                    md:block
                    text-sm
                    font-semibold
                    py-3
                    px-4
                    rounded-full 
                    hover:bg-neutral-100 
                    transition 
                    md:cursor-pointer
                    "
        >
          Airbnb your home
        </div>

        <div
          onClick={() => {
            toggleOpen();
          }}
          className="
                    p-4 
                    md:p-1 
                    md:px-2 
                    border 
                    border-neutral-200 
                    flex 
                    items-center
                    gap-3 
                    rounded-full 
                    md:cursor-pointer 
                    hover:shadow-md 
                    transition
                    "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute
            rounded-xl
            shadow-md
            w-2/5
            md:w-3/4
            bg-white
            overflow-hidden
            top-12
            right-0
            text-sm
            "
        >
          <div
            className="
                flex
                flex-col
                md:cursor-pointer
                "
          >
            <>
              <MenuItem onClick={() => {}} label="Login" />
              <MenuItem onClick={() => {}} label="Sing Up" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export { UserMenu };
