import React from "react";

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

export default Course;
