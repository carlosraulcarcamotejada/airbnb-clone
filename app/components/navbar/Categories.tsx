"use client";
import { FC } from "react";
import { Container } from "../Container";
import { IconType } from "react-icons";
import { CategoryBox } from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { categories } from "@/app/fixtures/categories";

export interface Category {
  label: string;
  icon: IconType;
  description: string;
}

const Categories: FC = (): JSX.Element => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathName = usePathname();
  const isMainPage = pathName === "/";

  if (!isMainPage) return <></>;

  return (
    <Container background="bg-neutral-900" isDark={true}>
      <div
        className="
                  flex
                  items-center
                  justify-between
                  overflow-x-auto
                  pt-4
                  dark:bg-neutral-900
                  "
      >
        {categories.map((categoryItem) => (
          <CategoryBox
            key={categoryItem.label}
            label={categoryItem.label}
            selected={category === categoryItem.label}
            icon={categoryItem.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export { Categories };
