"use client";
import { FC, useCallback } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Avatar } from "../Avatar";
import { MenuItem } from "./MenuItem";
import { useRegisterModalStore } from "@/app/hooks/useRegisterModalStore";
import { useLoginModalStore } from "@/app/hooks/useLoginModalStore";
import { Menu, Transition } from "@headlessui/react";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import { useRentModalStore } from "@/app/hooks/useRentModalStore";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: FC<UserMenuProps> = ({ currentUser }): JSX.Element => {
  const loginModal = useLoginModalStore();
  const registerModal = useRegisterModalStore();
  const rentModal = useRentModalStore();

  const onRent = useCallback(() => {
    if (!currentUser) return loginModal.onOpen();
    //Open rent modal
    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);

  return (
    <Menu as="div" className="relative ">
      {({ open }) => (
        <>
          <div className="flex items-center gap-3">
            <div
              onClick={onRent}
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

            <Menu.Button
              className={`
              ${open ? "shadow-md" : ""}
              hover:shadow-md
              border
              border-neutral-200 
              flex
              justify-between 
              items-center
              md:cursor-pointer 
              md:p-1 
              md:px-1.5 
              p-4
              md:w-[77px]
              md:h-[42px]
              rounded-full 
              transition
                    `}
            >
              <AiOutlineMenu className="md:ml-1.5" />
              <div className="hidden md:block">
                <Avatar src={currentUser?.image} />
              </div>
            </Menu.Button>
          </div>

          {/* MENU */}
          <Transition
            show={open}
            enter="transform transition duration-100 ease-in"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100"
            leave="transform transition duration-75 ease-out"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-90"
          >
            <Menu.Items
              className="
                        absolute 
                        bg-white
                        border
                        md:w-3/4 
                        overflow-hidden 
                        right-0 
                        rounded-xl 
                        shadow-lg
                        text-sm
                        top-2
                        w-[40vw]
                        "
            >
              <div
                className="
                          flex
                          flex-col
                          md:cursor-pointer
                          "
              >
                {currentUser ? (
                  <>
                    <MenuItem onClick={() => {}} label="My Trips" />
                    <MenuItem onClick={() => {}} label="My Favorites" />
                    <MenuItem onClick={() => {}} label="My Reservations" />
                    <MenuItem onClick={() => {}} label="My Properties" />
                    <MenuItem
                      onClick={rentModal.onOpen}
                      label="Airbnb my home"
                    />
                    <hr />
                    <MenuItem onClick={signOut} label="Logout" />
                  </>
                ) : (
                  <>
                    <MenuItem onClick={loginModal.onOpen} label="Login" />
                    <MenuItem onClick={registerModal.onOpen} label="Sing Up" />
                  </>
                )}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export { UserMenu };
