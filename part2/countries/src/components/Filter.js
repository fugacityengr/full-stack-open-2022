const Filter = ({ filterCharacter, handleFilterInput }) => {
  return (
    <div>
      find countries{" "}
      <input value={filterCharacter} onChange={handleFilterInput} />
    </div>
  );
};

export default Filter;
