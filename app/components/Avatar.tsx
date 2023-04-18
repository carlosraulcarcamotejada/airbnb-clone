"use client";
import { FC } from "react";
import Image from "next/image";

interface AvatarProps {
  src: string | undefined | null;
}

const Avatar: FC<AvatarProps> = ({ src }): JSX.Element => {
  return (
    <Image
      alt="avatar"
      className="rounded-full"
      height="30"
      priority
      src={src || "/images/placeholder.jpeg"}
      width="30"
    />
  );
};

export { Avatar };
