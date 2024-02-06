import { useState, useRef } from "react";

import { addStudentToDB } from "../utils/helpers";

export const Form = () => {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [city, setCity] = useState("");

  const nameEl = useRef(null);
  const numEl = useRef(null);
  const cityEl = useRef(null);

  const submitForm = async () => {
    await addStudentToDB(name, num, city);
  };

  return (
    <div>
      <form>
        <label>Student Name</label>
        <input
          ref={nameEl}
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Student name..."
        />

        <label>Student #</label>
        <input
          ref={numEl}
          type="text"
          id="id"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          placeholder="Axxxxxx"
        />

        <label>City</label>
        <input
          ref={cityEl}
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Student's city of residence"
        />

        <button onClick={() => submitForm()}>Add Student</button>
      </form>
    </div>
  );
};
