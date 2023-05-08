"use client";
import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo: FC = (): JSX.Element => {
  const router = useRouter();

  return (
    <div
      className="
                cursor-pointer
                flex 
                gap-x-1.5
                h-14 
                items-center 
                justify-center 
                w-14 
                md:h-10 
                md:w-28 
                "
      onClick={() => router.push("/")}
    >
       {/* logo_airbnb original dimesion: 349 × 375 */}
      <Image
        alt="logo brand"
        height={34}
        priority
        src="/images/logo_airbnb.png"
        style={{ height: "34px", width: "32px" }}
        width={32}
      />
      {/* name_airbnb original dimesion: 779 × 371 */}
      <Image
        alt="name brand"
        className="hidden lg:block"
        height={32}
        priority
        src="/images/name_airbnb.png"
        style={{ height: "32px", width: "67px" }}
        width={67}
      />
    </div>
  );
};

export { Logo };
