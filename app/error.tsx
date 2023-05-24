"use client";
import { FC } from "react";
import { EmptyState } from "./components/EmptyState";

interface ErrorStateProps {
  error: Error;
}

const ErrorState: FC<ErrorStateProps> = ({ error }): JSX.Element => {

  return (
    <>
      <EmptyState title="Ooops!" subtitle="Something went wrong" />
    </>
  );
};

export default ErrorState;
