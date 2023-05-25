"use client";
import { FC, useCallback } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Avatar } from "../Avatar";
import { useRegisterModal } from "@/app/hooks/useRegisterModal";
import { useLoginModal } from "@/app/hooks/useLoginModal";
import { Menu, Transition } from "@headlessui/react";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import { useRentModal } from "@/app/hooks/useRentModal";
import { useRouter } from "next/navigation";
import { MenuItem } from "./MenuItem";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: FC<UserMenuProps> = ({ currentUser }): JSX.Element => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const rentModal = useRentModal();

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
                        px-4
                        py-3
                        rounded-full 
                        text-sm
                        transition 
                        hover:bg-neutral-100
                        dark:hover:bg-neutral-700
                        md:block
                        md:cursor-pointer
                        dark:text-neutral-300
                        dark:bg-neutral-800
                        "
            >
              Airbnb your home
            </div>

            <Menu.Button
              className={`
                        ${open ? "shadow-md" : ""}
                        ${open ? "dark:bg-neutral-800" : ""}
                        border
                        border-neutral-200 
                        flex
                        focus:outline-none
                        hover:shadow-md
                        items-center
                        justify-between 
                        p-4
                        rounded-full 
                        transition
                        md:cursor-pointer 
                        md:h-[42px]
                        md:p-1 
                        md:px-1.5 
                        md:w-[77px]
                        dark:border-neutral-700
                    `}
            >
              <AiOutlineMenu className="md:ml-1.5 dark:text-neutral-400" />
              <div className="hidden md:block">
                <Avatar src={currentUser?.image} />
              </div>
            </Menu.Button>
          </div>

          {/* MENU */}
          <MenuModal
            currentUser={currentUser}
            onOpenLoginModal={loginModal.onOpen}
            open={open}
            onOpenRegisterModal={registerModal.onOpen}
            OnOpenRentModal={rentModal.onOpen}
          />
        </>
      )}
    </Menu>
  );
};

interface MenuModalProps {
  open: boolean;
  currentUser: SafeUser | null | undefined;
  OnOpenRentModal: () => void;
  onOpenLoginModal: () => void;
  onOpenRegisterModal: () => void;
}

const MenuModal: FC<MenuModalProps> = ({
  open,
  currentUser,
  OnOpenRentModal,
  onOpenLoginModal,
  onOpenRegisterModal,
}): JSX.Element => {
  const router = useRouter();
  return (
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
                  focus:outline-none
                  overflow-hidden 
                  right-0 
                  rounded-xl 
                  shadow-lg
                  text-sm
                  top-2
                  w-[40vw]
                  md:w-3/4
                  dark:bg-neutral-900
                  dark:border-neutral-700
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
              <MenuItem
                onClick={() => router.push("/trips")}
                label="My Trips"
              />
              <MenuItem onClick={() => router.push('/favorites')} label="My Favorites" />
              <MenuItem
                onClick={() => router.push("/reservations")}
                label="My Reservations"
              />
              <MenuItem onClick={() => router.push('/properties')} label="My Properties" />
              <MenuItem onClick={OnOpenRentModal} label="Airbnb my home" />
              <hr className="dark:border-neutral-700" />
              <MenuItem onClick={signOut} label="Logout" />
            </>
          ) : (
            <>
              <MenuItem onClick={onOpenLoginModal} label="Login" />
              <MenuItem onClick={onOpenRegisterModal} label="Sing Up" />
            </>
          )}
        </div>
      </Menu.Items>
    </Transition>
  );
};

export { UserMenu };
