import React, { useState } from 'react';

type CountryType = {
  name: string;
  isoCode: string;
};
const Select = () => {
  const [selected, setSeleted] = useState<string>('');
  const countries: CountryType[] = [
    { name: 'Austria', isoCode: 'AT' },
    { name: 'Ireland', isoCode: 'IE' },
    { name: 'United States', isoCode: 'US' }
  ];
  const onChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const element = event.target as HTMLSelectElement;
    setSeleted(element.value);
  };
  return (
    <div>
      <select role='combobox' value={selected} onChange={onChange}>
        <option value=''>Select a country</option>
        {countries.map((country) => (
          <option key={country.isoCode} value={country.isoCode}>
            {country.name}
          </option>
        ))}
      </select>
      <p>{selected}</p>
    </div>
  );
};

export default Select;
