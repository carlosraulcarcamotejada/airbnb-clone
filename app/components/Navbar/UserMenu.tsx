"use client";
import { FC, useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Avatar } from "../Avatar";
import { MenuItem } from "./MenuItem";
import { useRegisterModalStore } from "@/app/hooks/useRegisterModalStore";
import { useLoginModalStore } from "@/app/hooks/useLoginModalStore";

const UserMenu: FC = (): JSX.Element => {
  const loginModal = useLoginModalStore();
  const registerModal = useRegisterModalStore();
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
                    font-semibold
                    hidden
                    hover:bg-neutral-100 
                    md:block
                    md:cursor-pointer
                    px-4
                    py-3
                    rounded-full 
                    text-sm
                    transition 
                    "
        >
          Airbnb your home
        </div>

        <div
          onClick={toggleOpen}
          className="
                    border 
                    border-neutral-200 
                    flex 
                    gap-3 
                    hover:shadow-md 
                    items-center
                    md:cursor-pointer 
                    md:p-1 
                    md:px-2 
                    p-4 
                    rounded-full 
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
                    md:w-3/4
                    overflow-hidden
                    right-0
                    rounded-xl
                    shadow-md
                    text-sm
                    top-14
                    w-2/5
                   bg-white
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
              <MenuItem onClick={loginModal.onOpen} label="Login" />
              <MenuItem onClick={registerModal.onOpen} label="Sing Up" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export { UserMenu };
