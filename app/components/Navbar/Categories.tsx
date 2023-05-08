"use client";
import { FC } from "react";
import { Container } from "../Container";
import { IconType } from "react-icons";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { BsSnow } from "react-icons/bs";
import {
  GiBarn,
  GiBoatFishing,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/Gi";
import { MdOutlineVilla } from "react-icons/md";
import { IoDiamond } from "react-icons/io5";
import { FaSkiing } from "react-icons/fa";
import { CategoryBox } from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

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
    <Container>
      <div
        className="
                  flex
                  items-center
                  justify-between
                  overflow-x-auto
                  pt-4
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

const categories: Category[] = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property has windmills",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern",
  },
  {
    label: "CountrySide",
    icon: TbMountain,
    description: "This property is in the countryside",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This property has a pool",
  },
  {
    label: "Island",
    icon: GiIsland,
    description: "This property is on an island",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is close to a lake",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property has skiig activities",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This property is in a castle",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property has camping activities",
  },
  {
    label: "Artic",
    icon: BsSnow,
    description: "This property has camping activities",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "This property is in a cave",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property is in a barn",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is luxurius",
  },
];

export { Categories, categories };
