"use client";
import { FC } from "react";
import { FooterContentModal } from "./FooterContentModal";
import FooterCopyright from "./FooterCopyright";

const Footer: FC = (): JSX.Element => {
  return (
    <footer
      className="
                bg-neutral-50
                border-t
                bottom-0
                left-0
                px-5
                w-full
                z-10
                md:fixed
                md:h-12 
                md:px-14
                md:py-0
                lg:px-16
                xl:px-20
                dark:text-neutral-400
                dark:bg-neutral-900
                dark:border-neutral-700
                "
    >
      <div className="block md:hidden">
        <FooterContentModal />
      </div>
      <FooterCopyright />
    </footer>
  );
};

export { Footer };
