"use client";
import { FC } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineLogin } from "react-icons/hi";
import { FiAtSign } from "react-icons/fi";
import { Avatar } from "../Avatar";
import { MenuItem } from "./MenuItem";
import { useRegisterModalStore } from "@/app/hooks/useRegisterModalStore";
import { useLoginModalStore } from "@/app/hooks/useLoginModalStore";
import { Menu, Transition } from "@headlessui/react";

const UserMenu: FC = (): JSX.Element => {
  const loginModal = useLoginModalStore();
  const registerModal = useRegisterModalStore();

  return (
    <Menu as="div" className="relative">
      {({ open }) => (
        <>
          <div className="flex items-center gap-3">
            <div
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
            </Menu.Button>
          </div>

          {/* MENU */}
          <Transition 
            show={open}
            enter="transform transition duration-100 ease-in"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transform transition duration-75 ease-out"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            >
            <Menu.Items
              className="
                    absolute 
                    md:w-3/4 
                    overflow-hidden 
                    right-0 
                    rounded-xl 
                    shadow-md
                    text-sm
                    top-2
                    w-[40vw]
                  bg-white 
                    "
              static
            >
              <div
                className="
                      flex
                      flex-col
                      md:cursor-pointer
                      "
              >
                <>
                  <MenuItem
                    icon={HiOutlineLogin}
                    onClick={loginModal.onOpen}
                    label="Login"
                  />
                  <MenuItem
                    icon={FiAtSign}
                    onClick={registerModal.onOpen}
                    label="Sing Up"
                  />
                </>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export { UserMenu };
