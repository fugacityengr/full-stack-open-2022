import { useState, useEffect } from "react";
import axios from "axios";

const ShowButton = ({ country }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <button onClick={() => setShowInfo(!showInfo)}>show</button>
      <div>{showInfo ? <CountryDetail country={country} /> : null}</div>
    </div>
  );
};

const WeatherInfo = ({ country }) => {
  const [weather, setWeather] = useState(false);
  const api_key = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&units=metric&appid=${api_key}`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, []);

  return (
    <div>
      <h3>Weather in {country.capital}</h3>
      <p>temperature {weather ? weather.main.temp : null} Celsius</p>
      <img
        src={
          weather
            ? `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
            : ""
        }
        alt={weather ? weather.weather[0].description : "weather icon"}
      />
      <p>wind {weather ? weather.wind.speed : null} m/s</p>
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
    <WeatherInfo country={country} />
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
