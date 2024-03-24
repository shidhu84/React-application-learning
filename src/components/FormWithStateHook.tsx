import React, { FormEvent, useState } from "react";

function FormWithStateHook() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("person", person);
  };
  const [person, setPerson] = useState({
    name: "",
    age: 0,
  });
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          onChange={(event) => {
            setPerson({
              ...person,
              name: event.target.value,
            });
          }}
          id="name"
          type="text"
          value={person.name}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          onChange={(event) => {
            setPerson({
              ...person,
              age: parseInt(event.target.value),
            });
          }}
          id="age"
          type="number"
          className="form-control"
          value={person.age}
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}

export default FormWithStateHook;
