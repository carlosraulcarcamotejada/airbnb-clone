"use client";
import { Menu } from "@headlessui/react";
import { FC } from "react";
import { IconType } from "react-icons";

type props = {
  onClick: () => void;
  label: string;
  icon?: IconType;
};

const MenuItem: FC<props> = ({ onClick, label, icon: Icon }): JSX.Element => {
  return (
    <Menu.Item as="div" onClick={onClick}>
      {({ active }) => (
        <div
          className={`
                    ${active ? "bg-neutral-100 dark:bg-neutral-700" : ""}
                    ${active ? "text-neutral-600" : ""}
                    active:bg-neutral-200
                    active:dark:bg-neutral-700
                    flex
                    focus:outline-none
                    font-semibold
                    gap-3
                    items-center
                    px-4
                    py-3
                    text-neutral-500
                    transition
                    dark:text-neutral-300
                    `
                  }
        >
          {Icon && <Icon size={18} />}
          <div>{label}</div>
        </div>
      )}
    </Menu.Item>
  );
};

export { MenuItem };
