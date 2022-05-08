const PersonDeleteButton = ({ personId, personDeleteHandler }) => {
  return (
    <>
      <button type="button" onClick={personDeleteHandler} value={personId}>
        delete
      </button>
    </>
  );
};

const Persons = ({ personsToShow, personDeleteHandler }) => {
  return (
    <>
      {personsToShow.map((person) => (
        <div key={person.id}>
          {person.name} {person.number}{" "}
          <PersonDeleteButton
            personId={person.id}
            personDeleteHandler={personDeleteHandler}
          />
        </div>
      ))}
    </>
  );
};

export default Persons;
