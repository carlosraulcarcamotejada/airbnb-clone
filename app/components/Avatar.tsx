"use client";
import { FC } from "react";
import Image from "next/image";
import userPlaceholder from "../../public/images/userPlaceholder.svg"

interface AvatarProps {
  src: string | undefined | null;
}

const Avatar: FC<AvatarProps> = ({ src }): JSX.Element => {
  return (
    <>
      {src ? (
        <Image
          alt="avatar"
          className="rounded-full"
          height="30"
          priority
          src={src}
          width="30"
        />
      ) : (
        <Image
          alt="userlogo"
          height="30"
          priority
          src={userPlaceholder}
          width="30"
        />
        
      )}
    </>
  );
};

export { Avatar };
