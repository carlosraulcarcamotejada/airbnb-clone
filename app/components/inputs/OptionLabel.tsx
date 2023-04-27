"use client";
import { Country } from "@/app/hooks/useCountries";
import { FC } from "react";

interface OptionLabelProps {
  option: Country;
}

const OptionLabel: FC<OptionLabelProps> = ({ option }): JSX.Element => {
  return (
    <div className="flex items-center gap-3">
      <div>{option.flag}</div>
      <div>
        {option.label},
        <span className="text-neutral-500 ml-1">{option.region}</span>
      </div>
    </div>
  );
};

export { OptionLabel };
