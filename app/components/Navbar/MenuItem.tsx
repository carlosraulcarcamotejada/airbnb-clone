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
    px-4
    py-3
    hover:bg-neutral-100
    transition
    font-semibold
  "
    >
      {label}
    </div>
  );
};

export { MenuItem };
