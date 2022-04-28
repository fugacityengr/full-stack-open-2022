import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Countries from "./components/Countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filterCharacter, setFilterCharacter] = useState("");

  const handleFilterInput = (event) => {
    setFilterCharacter(event.target.value);
  };

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <>
      <Filter value={filterCharacter} handleFilterInput={handleFilterInput} />
      <Countries countries={countries} filterCharacter={filterCharacter} />
    </>
  );
};

export default App;
