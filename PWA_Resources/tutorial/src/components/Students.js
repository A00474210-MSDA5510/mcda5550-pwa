import { useState, useEffect } from "react";
import { getAllStudentsFromDB } from "../utils/helpers";
import { Student } from "./Student";

export const Students = () => {
  const [studentsList, setStudentsList] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const existingStudents = await getAllStudentsFromDB();
    setStudentsList(existingStudents);
  }, []);

  return (
    <div>
      {studentsList
        ? studentsList.map((student, index) => (
            <Student
              key={index}
              name={student.name}
              num={student.num}
              city={student.city}
            />
          ))
        : "Loading..."}
    </div>
  );
};
