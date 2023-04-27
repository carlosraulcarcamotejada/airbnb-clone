"use client";
import { FC } from "react";
import Select from "react-select";
import { OptionLabel } from "./OptionLabel";
import { Country, useCountries } from "@/app/hooks/useCountries";

interface CountrySelectProps {
  onChange: (value: Country) => void;
  value?: Country;
}

const CountrySelect: FC<CountrySelectProps> = ({
  onChange,
  value,
}): JSX.Element => {
  const { getAll } = useCountries();

  return (
    <div>
      <Select
        classNames={{
          control: () => "p-3 border-2",
          input: () => "text-lg",
          option: () => "text-lg",
        }}
        formatOptionLabel={(option) => <OptionLabel option={option} />}
        isClearable
        onChange={(value) => onChange(value as Country)}
        options={getAll()}
        placeholder="Anywhere"
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: { ...theme.colors, primary: "black", primary25: "#ffe4e6" },
        })}
        value={value}
      />
    </div>
  );
};

export { CountrySelect };
