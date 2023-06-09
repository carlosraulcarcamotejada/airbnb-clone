"use client";
import { FC } from "react";
import { IconType } from "react-icons";

interface ListingCategoryProps {
  description: string;
  icon: IconType;
  label: string;
}

const ListingCategory: FC<ListingCategoryProps> = ({
  description,
  icon: Icon,
  label,
}): JSX.Element => {
  return (
    <div
      className="
                    flex
                    flex-col
                    gap-6
                    "
    >
      <div className="flex items-center gap-4">
        <Icon size={40} className="text-neutral-600 dark:text-neutral-400" />
        <div className="flex flex-col">
          <div className="text-lg font-semibold">{label}</div>
          <div className="text-neutral-500 font-light dark:text-neutral-400">{description}</div>
        </div>
      </div>
    </div>
  );
};

export { ListingCategory };
