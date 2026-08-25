import { getCountries } from '@/lib/actions';

async function SelectCountry({ defaultCountry, name, id, className }) {
  const countries = await getCountries();
  const flag =
    countries.find(country =>
      country.names?.alternates.includes(defaultCountry),
    )?.flag?.emoji ?? '';

  return (
    <select
      name={name}
      id={id}
      // Here we use a trick to encode BOTH the country name and the flag into the value. Then we split them up again later in the server action
      defaultValue={`${defaultCountry}%${flag}`}
      className={className}
    >
      <option value=''>Select country...</option>
      {countries.map(c => (
        <option
          key={c.names?.alternates?.at(0)}
          value={`${c.names?.alternates?.at(0)}%${c.flag?.emoji}`}
        >
          {c.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;
