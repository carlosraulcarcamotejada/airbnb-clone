"use client";
import { FC } from "react";
import Image from "next/image";
import balloon from "../../../public/images/balloon.svg";
import { IoIosArrowUp } from "react-icons/io";

const Footer: FC = (): JSX.Element => {
  return (
    <footer
      className="
                bg-neutral-100
                border-t
                bottom-0
                relative
                md:fixed
                h-28
                left-0
                lg:px-16
                md:bg-white
                md:h-12
                md:px-14
                md:py-0
                pb-3
                pt-2
                px-5
                w-full
                xl:px-20
                "
    >
      {/* CONTAINER PARENT */}
      <hr className="block md:hidden" />
      <div
        className="
                   flex 
                   flex-col
                   h-full 
                   justify-between
                   md:flex-row-reverse 
                   md:items-center
                   md:gap-x-2
                   "
      >
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
          <div className="flex items-center gap-x-2">
            <Image
              alt="userlogo"
              className="cursor-pointer"
              height="16"
              priority
              src={balloon}
              width="16"
            />
            <div className="hover:underline cursor-pointer">English (US)</div>
          </div>
          <div className="flex items-center gap-x-2">
            <div>$</div>
            <div className="hover:underline cursor-pointer">USD</div>
          </div>
          <div
            onClick={() => console.log("Opening Modal")}
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
                    text-sm 
                    w-full 
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
    </footer>
  );
};

export { Footer };
