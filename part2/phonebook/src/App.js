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
  const personDeleteHandler = (event) => {
    const personId = parseInt(event.target.value);
    const personToDelete = persons.filter(
      (person) => person.id === personId
    )[0];
    if (window.confirm(`Delete ${personToDelete.name}?`)) {
      personService.deleteContact(personId);
      setPersons(persons.filter((person) => person.id !== personId));
    }
  };

  const addPerson = (event) => {
    event.preventDefault();
    const newPersonObject = {
      name: newName,
      number: newNumber,
    };
    const existingPersonId =
      persons.filter((person) => person.name === newName).length > 0
        ? persons.filter((person) => person.name === newName)[0].id
        : false;
    if (existingPersonId) {
      if (
        window.confirm(
          `${newPersonObject.name} us already added to phonebook, replace the old number with a new one?`
        )
      ) {
        personService
          .updateContact(existingPersonId, newPersonObject)
          .then((updatedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== existingPersonId ? person : updatedPerson
              )
            );
            setNewName("");
            setNewNumber("");
          });
        return;
      }
    } else if (newName === "" || newNumber === "") {
      alert("Invalid credentials. Please input a name and number.");
      return;
    }

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
      <Persons
        personsToShow={personsToShow}
        personDeleteHandler={personDeleteHandler}
      />
    </div>
  );
};

export default App;
