"use client";
import { FC } from "react";
import { Loader } from "./components/Loader";

const Loading: FC = (): JSX.Element => {
  return (
    <div
      className="
                grid
                place-content-center
                h-[70vh]
                "
    >
      <Loader />
    </div>
  );
};

export default Loading;
