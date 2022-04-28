const Countries = ({ countries, filterCharacter }) => {
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filterCharacter)
  );
  if (filteredCountries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (filteredCountries.length === 1) {
    const [country] = filteredCountries;
    return (
      <div>
        <h2>{country.name.common}</h2>
        <div>capital {country.capital}</div>
        <div>area {country.area}</div>
        <h3>languages:</h3>
        <ul>
          {Object.values(country.languages).map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
        <div style={{ fontSize: "10rem" }}>{country.flag}</div>
      </div>
    );
  }
  return (
    <>
      {filteredCountries.map((country) => (
        <div key={country.name.common}>{country.name.common}</div>
      ))}
    </>
  );
};

export default Countries;
