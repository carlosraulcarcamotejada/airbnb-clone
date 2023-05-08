"use client";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { Heading } from "./Heading";
import { Button } from "./Button";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: FC<EmptyStateProps> = ({
  showReset,
  subtitle = "Try changing or removing some of your filters",
  title = "No exact matches",
}): JSX.Element => {
  const router = useRouter();

  return (
    <div
      className="
                flex
                flex-col
                h-[60vh]
                items-center
                justify-center
                "
    >
      <Heading center title={title} subtitle={subtitle} />
      <div className="w-48 mt-4">
        {showReset && (
            <Button 
                outline
                label="Remove all filters"
                onClick={() => router.push('/')}
            />
        )}
      </div>
    </div>
  );
};

export { EmptyState };
