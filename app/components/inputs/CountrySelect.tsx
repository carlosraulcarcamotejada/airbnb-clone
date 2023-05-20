"use client";
import { FC } from "react";
import Select, { Theme } from "react-select";
import { useCountries } from "@/app/hooks/useCountries";
import { Country } from "@/app/types";

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
        classNames={classesName}
        formatOptionLabel={(option) => <OptionLabel option={option} />}
        isClearable
        onChange={(value) => onChange(value as Country)}
        options={getAll()}
        placeholder="Anywhere"
        theme={theme}
        value={value}
      />
    </div>
  );
};

const classesName = {
  control: () => "p-3 border-2",
  input: () => "text-lg",
  option: () => "text-lg",
};

const theme = (theme: Theme) => ({
  ...theme,
  borderRadius: 6,
  colors: { ...theme.colors, primary: "black", primary25: "#ffe4e6" },
});

const OptionLabel: FC<{ option: Country }> = ({ option }): JSX.Element => {
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

export { CountrySelect };
