import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterCharacter, setFilterCharacter] = useState("");

  useEffect(() => {
    personService
      .getAllPersons()
      .then((initialPersonList) => setPersons(initialPersonList));
  }, []);

  const handleFilterInput = (event) => {
    setFilterCharacter(event.target.value);
  };

  const handlePersonInput = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberInput = (event) => {
    setNewNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.filter((person) => person.name === newName).length > 0) {
      alert(`${newName} is already added to phonebook`);
      return;
    } else if (newName === "" || newNumber === "") {
      alert("Invalid credentials. Please input a name and number.");
      return;
    }
    const newPersonObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };

    personService.createContact(newPersonObject).then((newPerson) => {
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
    });
  };

  const personsToShow =
    filterCharacter === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(filterCharacter)
        );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        filterCharacter={filterCharacter}
        handleFilterInput={handleFilterInput}
      />
      <h3>add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handlePersonInput={handlePersonInput}
        handleNumberInput={handleNumberInput}
      />
      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} />
    </div>
  );
};

export default App;
