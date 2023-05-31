"use client";
import { FC } from "react";
import Image from "next/image";
import errorImg from "../public/images/errorImg.svg";
import { Container } from "./components/Container";
import { Heading } from "./components/Heading";

interface ErrorStateProps {
  error: Error;
}

const ErrorState: FC<ErrorStateProps> = ({ error }): JSX.Element => {
  return (
    <Container>
      <div className="flex flex-col justify-center mt-36 items-center h-[50vh]">
        <Heading title="Ooops!" subtitle="Something went wrong" />
        <Image
          alt="Error icon"
          height="200"
          priority
          src={errorImg}
          width="200"
        />
      </div>
    </Container>
  );
};

export default ErrorState;
