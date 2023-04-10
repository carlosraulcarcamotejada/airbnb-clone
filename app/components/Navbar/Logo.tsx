'use client';
import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo:FC = () => {
    const router = useRouter();
    return (
    <Image priority width={100} height={100}  src="/images/logo.png"  alt="logo" className="hidden md:block cursor-pointer"  />
    )
}

export { Logo };