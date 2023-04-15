"use client";
import { FC } from "react";

type props = {
  onClick: () => void;
  label: string;
};

const MenuItem: FC<props> = ({ onClick, label }): JSX.Element => {
  return (
    <div
      onClick={onClick}
      className="
                font-semibold
                px-4
                py-3
                transition
              hover:bg-neutral-100
                "
    >
      {label}
    </div>
  );
};

export { MenuItem };
