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
                    ${active ? "bg-neutral-100 text-neutral-600" : ""}
                    flex
                    font-semibold
                    gap-3
                    items-center
                    px-4
                    py-3
                    text-neutral-500
                    transition
                  active:bg-neutral-200
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
