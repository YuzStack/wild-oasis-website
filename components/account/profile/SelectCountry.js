import { getCountries } from '@/lib/data-service';

export default async function SelectCountry({
  defaultCountry,
  name,
  id,
  className,
}) {
  const countries = await getCountries();

  return (
    <select
      name={name}
      id={id}
      defaultValue={defaultCountry}
      className={className}
    >
      <option value=''>Select country...</option>
      {countries.map(country => (
        <option key={country.name} value={country.name}>
          {country.name}
        </option>
      ))}
    </select>
  );
}
