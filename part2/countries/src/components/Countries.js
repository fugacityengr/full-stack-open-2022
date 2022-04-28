import { useState } from "react";

const ShowButton = ({ country }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <button onClick={() => setShowInfo(!showInfo)}>show</button>
      <div>{showInfo ? <CountryDetail country={country} /> : null}</div>
    </div>
  );
};

const CountryDetail = ({ country }) => (
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

const Countries = ({ countries, filterCharacter }) => {
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filterCharacter)
  );

  if (filteredCountries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (filteredCountries.length === 1) {
    const [country] = filteredCountries;
    return <CountryDetail country={country} />;
  }
  return (
    <>
      {filteredCountries.map((country, index) => (
        <div key={index}>
          <div>{country.name.common}</div> <ShowButton country={country} />
        </div>
      ))}
    </>
  );
};

export default Countries;
