"use client";
import { FC } from "react";
import { IconType } from "react-icons";
import { BeatLoader } from "react-spinners";

interface ButtonProps {
  disable?: boolean;
  icon?: IconType;
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  outline?: boolean;
  small?: boolean;
}

const Button: FC<ButtonProps> = ({
  disable,
  icon: Icon,
  label,
  onClick,
  outline,
  small,
}): JSX.Element => {
  return (
    <button
      onClick={onClick}
      disabled={disable}
      className={`
                ${outline ? "bg-white" : "bg-rose-500"}
                ${outline ? "border-black" : "border-rose-500"}
                ${outline ? "border" : ""}
                ${outline ? "hover:bg-neutral-100/60" : ""}
                ${outline ? "text-black" : "text-white"}
                ${small ? "border" : "border-2"}
                ${small ? "font-light" : "font-semibold"}
                ${small ? "py-1" : "py-3"}
                ${small ? "text-sm" : "text-md"}
                active:opacity-70
                active:scale-95
                disabled:cursor-not-allowed
                disabled:opacity-70
                disabled:scale-100
                hover:opacity-80
                h-[52px]
                relative
                rounded-lg
                transition
                w-full
        `}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      <div className="flex items-center justify-center">
        {disable ? <BeatLoader color="#f5f5f5" /> : label}
      </div>
    </button>
  );
};

export { Button };
