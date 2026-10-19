import { COUNTRIES } from "@/config/constants";

interface Country {
  code: string;
  flag: string;
}

export const CountrySelect = () => (
  <select className="w-20 shrink-0 border-2 p-2 rounded-md text-sm bg-transparent">
    {COUNTRIES.map((country: Country) => (
      <option key={country.code} value={country.code}>
        {country.flag} {country.code}
      </option>
    ))}
    <option disabled>More countries coming soon</option>
  </select>
);