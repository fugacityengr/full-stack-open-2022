const Filter = ({ filterCharacter, handleFilterInput }) => {
  return (
    <div>
      filter shown with{" "}
      <input value={filterCharacter} onChange={handleFilterInput} />
    </div>
  );
};

export default Filter;
