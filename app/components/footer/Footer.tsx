"use client";
import { FC } from "react";
import { FooterContentModal } from "./FooterContentModal";
import FooterCopyright from "./FooterCopyright";

const Footer: FC = (): JSX.Element => {
  return (
    <footer
      className="
                bg-neutral-50/80
                border-t
                bottom-0
                left-0
                lg:px-16
                md:bg-white
                md:fixed
                md:h-12
                md:px-14
                md:py-0
                px-5
                w-full
                xl:px-20
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
