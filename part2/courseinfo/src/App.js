const Header = ({ name }) => (
  <>
    <h2>{name}</h2>
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
      <h1>Web development curriculum</h1>
      <Header name={course.name} />
      <Parts parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
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
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];
  return (
    <>
      {courses.map((course) => (
        <div key={course.id}>
          <Course course={course} />
        </div>
      ))}
    </>
  );
};

export default App;
