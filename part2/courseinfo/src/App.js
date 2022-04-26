const Header = ({ name }) => (
  <>
    <h1>{name}</h1>
  </>
);

const Parts = ({ parts }) => (
  <>
    {parts.map((part) => (
      <p key={part.id}>
        {part.name} {part.exercises}
      </p>
    ))}
  </>
);

const Total = ({ parts }) => (
  <>
    <strong>
      total of {parts.reduce((total, part) => total + part.exercises, 0)}{" "}
      exercises
    </strong>
  </>
);

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <Parts parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };
  return <Course course={course} />;
};

export default App;
