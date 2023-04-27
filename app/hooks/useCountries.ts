import countries from "world-countries";

interface Country {
  flag: string;
  label: string;
  latlng: [number, number];
  region: string;
  value: string;
}

const formattedCountries: Country[] = countries.map((country) => ({
  flag: country.flag,
  label: country.name.common,
  latlng: country.latlng,
  region: country.region,
  value: country.cca2,
}));

const useCountries = () => {
  const getAll = (): Country[] => formattedCountries;



  const getByValue = (value: string) => {
    return formattedCountries.find((country) => country.value === value);
  };

  return {
    //Methods
    getAll,
    getByValue,
  };
};

export { useCountries };
export type { Country };
