import { useState } from "react";

function Input() {
  const [person, setPerson] = useState({
    fullName: "",
    email: "",
    number: "",
    school: {
      schoolName: "",
      titleStudy: "",
      dateStudy: "",
    },
    work: {
      companyName: "",
      responsibilities: "",
      dateStart: "",
      dateEnd: "",
    },
  });

  function handleFullName(e) {
    setPerson({ ...person, fullName: e.target.value });
  }

  function handleEmail(e) {
    setPerson({ ...person, email: e.target.value });
  }

  function handleNumber(e) {
    setPerson({ ...person, number: e.target.value });
  }

  function handleSchoolName(e) {
    setPerson({
      ...person,
      school: { ...person.school, schoolName: e.target.value },
    });
  }

  function handleTitleStudy(e) {
    setPerson({
      ...person,
      school: { ...person.school, titleStudy: e.target.value },
    });
  }

  function handleDateStudy(e) {
    setPerson({
      ...person,
      school: { ...person.school, dateStudy: e.target.value },
    });
  }

  return (
    <>
      <h3>Personal Info</h3>
      <div className="input-container">
        <label htmlFor="fullName">FullName: </label>
        <input
          type="text"
          id="fullName"
          value={person.fullName}
          onChange={handleFullName}
        ></input>
      </div>
      <div className="input-container">
        <label htmlFor="personalEmail">Email: </label>
        <input
          type="email"
          id="personalEmail"
          value={person.email}
          onChange={handleEmail}
        ></input>
      </div>
      <div className="input-container">
        <label htmlFor="number">Number: </label>
        <input
          type="number"
          id="number"
          value={person.number}
          onChange={handleNumber}
        ></input>
      </div>
      <h3>School</h3>
      <div className="input-container">
        <label htmlFor="schoolName">School Name: </label>
        <input
          type="text"
          id="schoolName"
          value={person.school.schoolName}
          onChange={handleSchoolName}
        ></input>
      </div>
      <div className="input-container">
        <label htmlFor="titleStudy">Title Study: </label>
        <input
          type="text"
          id="titleStudy"
          value={person.school.titleStudy}
          onChange={handleTitleStudy}
        ></input>
      </div>
      <div className="input-container">
        <label htmlFor="dateStudy">Date Study: </label>
        <input
          type="date"
          id="dateStudy"
          value={person.school.dateStudy}
          onChange={handleDateStudy}
        ></input>
      </div>
    </>
  );
}

export default Input;
