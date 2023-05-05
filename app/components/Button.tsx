"use client";
import { FC } from "react";
import { IconType } from "react-icons";

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
            active:opacity-70
            active:scale-95
            disabled:cursor-not-allowed
            disabled:opacity-70
            hover:opacity-80
            relative
            rounded-lg
            transition
            w-full
            ${
              outline
                ? "bg-white hover:bg-neutral-100/60 border border-black text-black"
                : "bg-rose-500 border-rose-500 text-white"
            }
            ${
              small
                ? "font-light border py-1 text-sm"
                : "border-2 font-semibold py-3 text-md"
            }
        `}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
};

export { Button };
