"use client";
import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo: FC = (): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <Image
        priority
        width={100}
        height={100}
        src="/images/logo.png"
        alt="logo"
        className="cursor-pointer hidden md:block"
      />
    </>
  );
};

export { Logo };
