"use client";
import { FC, ReactNode } from "react";

type props = {
  children: ReactNode;
};

const Container: FC<props> = ({ children }): JSX.Element => {
  return (
    <div
      className="
                max-w-[2520px] 
                md:px-10 
                mx-auto px-4 
                sm:px-2 
                xl:px-20
                "
    >
      {children}
    </div>
  );
};

export { Container };
