"use client";
import { FC, ReactNode } from "react";

interface Containerprops {
  children: ReactNode;
}

const Container: FC<Containerprops> = ({ children }): JSX.Element => {
  return (
    <div
      className="
                max-w-[2520px] 
                md:px-10 
                mx-auto 
                px-4 
                sm:px-2 
                xl:px-20
                "
    >
      {children}
    </div>
  );
};

export { Container };
