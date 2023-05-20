"use client";
import { FC, useEffect } from "react";
import { EmptyState } from "./components/EmptyState";

interface ErrorStateProps {
  error: Error;
}

const ErrorState: FC<ErrorStateProps> = ({ error }): JSX.Element => {
  useEffect(() => {}, [error]);

  return (
    <>
      <EmptyState title="Ooops!" subtitle="Something went wrong" />
    </>
  );
};

export default ErrorState;
