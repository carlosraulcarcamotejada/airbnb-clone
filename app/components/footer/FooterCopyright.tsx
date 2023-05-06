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
                   md:flex-row-reverse 
                   md:gap-x-2
                   md:h-full
                   md:items-center
                   w-full
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
                    md:h-full 
                    md:justify-end 
                    text-sm 
                    w-full 
                    "
        >
          <div className="flex items-center gap-x-2  md:text-xs lg:text-sm">
            <Image
              alt="userlogo"
              className="cursor-pointer"
              height="16"
              priority
              src={balloon}
              width="16"
            />
            <div className="hover:underline cursor-pointer">
              English (US)
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <div>$</div>
            <div className="hover:underline cursor-pointer">USD</div>
          </div>
          <div
            onClick={onOpen}
            className="hidden md:flex md:items-center md:gap-x-1 group"
          >
            <div className="group-hover:underline group-active:opacity-60">
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
                    md:flex-row 
                    md:gap-x-2
                    md:h-full 
                    md:items-center 
                    md:justify-start
                    md:text-sm 
                    w-full
                    pb-4
                    md:pb-0
                    "
        >
          <div>
            &#169; {new Date().getFullYear()} Airbnb Clone by Carlos Cárcamo
          </div>
          <div className="flex items-center gap-x-2">
            <div className="hidden lg:block">&#183;</div>
            <a
              href="#"
              className="hover:underline cursor-pointer md:hidden lg:block"
            >
              Privacy
            </a>
            <div className="md:hidden lg:block">&#183;</div>
            <a
              href="#"
              className="hover:underline cursor-pointer md:hidden lg:block"
            >
              Terms
            </a>
            <div className="md:hidden lg:block">&#183;</div>
            <a
              href="#"
              className="hover:underline cursor-pointer md:hidden lg:block"
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
