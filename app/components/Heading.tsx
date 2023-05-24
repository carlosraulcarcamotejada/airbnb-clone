"use client";
import { FC } from "react";

interface HeadingProps {
  center?: boolean;
  subtitle: string;
  title: string;
}

const Heading: FC<HeadingProps> = ({
  center = false,
  subtitle,
  title,
}): JSX.Element => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="font-bold text-2xl dark:text-neutral-200">{title}</div>
      <div className="font-light mt-2 text-neutral-500 dark:text-neutral-400">{subtitle}</div>
    </div>
  );
};

export { Heading };
