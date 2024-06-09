import { findCountryByCode } from "@/utils/countries";

const CountryFlagAndName = ({ countryCode }: { countryCode: string }) => {
  const country = findCountryByCode(countryCode)!;

  const countryName =
    country.name.length > 20
      ? `${country?.name.substring(0, 20)}...`
      : country.name;
  return (
    <span className="flex justify-between items-center gap-2 text-sm">
      {country.flag} {country.name}
    </span>
  );
};
export default CountryFlagAndName;
