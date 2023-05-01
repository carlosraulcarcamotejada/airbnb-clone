"use client";
import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo: FC = (): JSX.Element => {
  const router = useRouter();

  return (
    <div
      className="flex w-14 h-14 md:w-28 md:h-10 items-center justify-center gap-2 cursor-pointer"
      onClick={() => router.push("/")}
    >
      <Image
        priority
        width={32}
        height={32}
        src="/images/logo_airbnb.png"
        alt="logo brand"
      />
      <Image
        priority
        width={67}
        height={27}
        sizes=""
        src="/images/name_airbnb.png"
        alt="name brand"
        className={`hidden lg:block`}
      />
    </div>
  );
};

export { Logo };
