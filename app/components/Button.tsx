'use client';
import { FC } from "react";
import { IconType } from "react-icons";

type props = {
  icon?: IconType;
  isDisable?: boolean;
  isOutline?: boolean;
  isSmall?: boolean;
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: FC<props> = ({
  icon: Icon,
  isDisable,
  isOutline,
  isSmall,
  label,
  onClick,
}): JSX.Element => {
  return (
    <button
      onClick={onClick}
      disabled={isDisable}
      className={`
            relative
            disabled:opacity-70
            disabled:cursor-not-allowed
            rounded-lg
            hover:opacity-80
            transition
            w-full
            ${
              isOutline
                ? "bg-white border-black text-black"
                : "bg-rose-500 border-rose-500 text-white"
            }
            ${
              isSmall
                ? "py-1 text-sm font-light border"
                : "py-3 text-md font-semibold border-2"
            }
        `}
      type="button"
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
};

export { Button };
