"use client";
import { FC } from "react";
import Image from "next/image";
import balloon from "../../../public/images/balloon.svg";
import { IoIosArrowUp } from "react-icons/io";
import { useFooterModal } from "@/app/hooks/useFooterModal";

const FooterCopyright: FC = (): JSX.Element => {


  const { onOpen } = useFooterModal();

  return (
    <>
      {/* CURRENT MONEY AN COPYRIGHT */}
      <div
        className="
                   flex 
                   flex-col
                   h-32
                   justify-between
                   w-full
                   md:flex-row-reverse 
                   md:gap-x-2
                   md:h-full
                   md:items-center
                   "
      >
        <hr />
        {/*LOCATION, CURRENT MONEY AND ASSINTENCE OPTIONS*/}
        <div
          className="
                    flex 
                    font-semibold
                    gap-x-4 
                    h-16 
                    items-center 
                    justify-start 
                    text-sm 
                    w-full 
                    md:h-full 
                    md:justify-end 
                    "
        >
          <div className="flex items-center gap-x-2 md:text-xs lg:text-sm">
            <Image
              alt="userlogo"
              className="cursor-pointer"
              height="16"
              priority
              src={balloon}
              width="16"
            />
            <div className="cursor-pointer hover:underline">
              English (US)
            </div>
          </div>
          <div className="flex gap-x-2 items-center ">
            <div>$</div>
            <div className="cursor-pointer hover:underline">USD</div>
          </div>
          <div
            onClick={onOpen}
            className="group hidden md:flex md:gap-x-1 md:items-center"
          >
            <div className="group-active:opacity-60 group-hover:underline">
              Assistance and resources
            </div>
            <div className="">
              <IoIosArrowUp
                className="group-active:opacity-60 text-black "
                size={20}
              />
            </div>
          </div>
        </div>
        {/*COPYRIGHT AND OPTIONS*/}
        <div
          className="
                    flex 
                    flex-col 
                    font-light 
                    h-16 
                    items-start
                    justify-center 
                    pb-4
                    w-full
                    md:flex-row 
                    md:gap-x-2
                    md:h-full 
                    md:items-center 
                    md:justify-start
                    md:pb-0
                    md:text-sm 
                    "
        >
          <div>
            &#169; {new Date().getFullYear()} Airbnb Clone by Carlos Cárcamo
          </div>
          <div className="flex gap-x-2 items-center">
            <div className="hidden lg:block">&#183;</div>
            <a
              href="#"
              className="cursor-pointer hover:underline md:hidden lg:block"
            >
              Privacy
            </a>
            <div className="md:hidden lg:block">&#183;</div>
            <a
              href="#"
              className="cursor-pointer hover:underline md:hidden lg:block"
            >
              Terms
            </a>
            <div className="md:hidden lg:block">&#183;</div>
            <a
              href="#"
              className="cursor-pointer hover:underline md:hidden lg:block"
            >
              Site Map
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterCopyright;
