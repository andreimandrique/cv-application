import { useState } from "react";

function Input() {
  const [person, setPerson] = useState({
    fullName: "",
    email: "",
    number: "",
    school: {
      schoolName: "",
      titleStudy: "",
      studyDate: "",
    },
    work: {
      companyName: "",
      responsibilities: "",
      startDate: "",
      endDate: "",
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

  function handleStudyDate(e) {
    setPerson({
      ...person,
      school: { ...person.school, studyDate: e.target.value },
    });
  }

  function handleCompanyName(e) {
    setPerson({
      ...person,
      work: { ...person.work, companyName: e.target.value },
    });
  }

  function handleResponsibilities(e) {
    setPerson({
      ...person,
      work: { ...person.work, responsibilities: e.target.value },
    });
  }

  function handleStartDate(e) {
    setPerson({
      ...person,
      work: { ...person.work, startDate: e.target.value },
    });
  }

  function handleEndDate(e) {
    setPerson({
      ...person,
      work: { ...person.work, endDate: e.target.value },
    });
  }

  function handleSave() {
    console.log(person);
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
        <label htmlFor="studyDate">Date Study: </label>
        <input
          type="date"
          id="studyDate"
          value={person.school.studyDate}
          onChange={handleStudyDate}
        ></input>
      </div>
      <h3>Experience</h3>
      <div className="input-container">
        <label htmlFor="companyName">Company Name: </label>
        <input
          type="text"
          id="companyName"
          value={person.work.companyName}
          onChange={handleCompanyName}
        ></input>
      </div>
      <div className="input-container">
        <label htmlFor="responsibilities">Responsibilities: </label>
        <textarea
          rows={4}
          cols={40}
          id="responsibilities"
          value={person.work.responsibilities}
          onChange={handleResponsibilities}
        ></textarea>
      </div>
      <div className="input-container">
        <label htmlFor="startDate">Start Date: </label>
        <input
          type="date"
          id="startDate"
          value={person.work.startDate}
          onChange={handleStartDate}
        ></input>
      </div>
      <div className="input-container">
        <label htmlFor="endDate">End Date: </label>
        <input
          type="date"
          id="endDate"
          value={person.work.endDate}
          onChange={handleEndDate}
        ></input>
      </div>
      <div className="btn-container">
        <button onClick={handleSave}>Save</button>
      </div>
      <div>
        <h3>Personal Info</h3>
        <div className="input-container">
          <p>FullName: </p>
          <p>{person.fullName}</p>
        </div>
        <div className="input-container">
          <p>Email: </p>
          <p>{person.email}</p>
        </div>
        <div className="input-container">
          <p>Number: </p>
          <p>{person.number}</p>
        </div>
        <h3>School</h3>
        <div className="input-container">
          <p>SchoolName: </p>
          <p>{person.school.schoolName}</p>
        </div>
        <div className="input-container">
          <p>Title Study: </p>
          <p>{person.school.titleStudy}</p>
        </div>
        <div className="input-container">
          <p>Date of Study: </p>
          <p>{person.school.studyDate}</p>
        </div>
      </div>
    </>
  );
}

export default Input;
