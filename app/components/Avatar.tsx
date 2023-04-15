"use client";
import { FC } from "react";
import Image from "next/image";

const Avatar: FC = (): JSX.Element => {
  return (
    <Image
      alt="avatar"
      className="rounded-full"
      height="30"
      priority
      src="/images/placeholder.jpeg"
      width="30"
    />
  );
};

export { Avatar };
