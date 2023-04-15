"use client";
import { FC } from "react";

type props = {
  center: boolean;
  subtitle: string;
  title: string;
};

const Heading: FC<props> = ({ center, subtitle, title }): JSX.Element => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-2xl font-bold">{title}</div>
      <div className="font-light text-neutral-500 mt-2">{subtitle}</div>
    </div>
  );
};

export { Heading };
