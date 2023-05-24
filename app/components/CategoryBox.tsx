"use client";
import { FC, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { Category } from "./navbar/Categories";

interface CategoryBoxProps extends Omit <Category, 'description' >   {
    selected?:boolean
}


const CategoryBox: FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
}): JSX.Element => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`
                ${selected ? "border-b-neutral-800 dark:border-b-neutral-200" : "border-transparent"}
                ${selected ? "text-neutral-800 dark:text-neutral-200" : "text-neutral-500"}
                border-b-2
                cursor-pointer
                flex
                flex-col
                gap-2
                hover:text-neutral-800
                hover:dark:text-neutral-200
                items-center
                justify-center
                p-3
                transition
                `}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export { CategoryBox };
