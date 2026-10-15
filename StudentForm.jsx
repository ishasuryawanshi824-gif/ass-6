
import React, { useState } from "react";

function StudentForm({ onSubmitStudent }) {
  const [student, setStudent] = useState({
    name: "",
    rollNo: "",
    department: "",
    marks: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setStudent({
      ...student,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmitStudent(student);

    setStudent({
      name: "",
      rollNo: "",
      department: "",
      marks: ""
    });
  }

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <label>Student Name</label>
      <input
        type="text"
        name="name"
        value={student.name}
        onChange={handleChange}
        placeholder="Enter student name"
        required
      />

      <label>Roll Number</label>
      <input
        type="number"
        name="rollNo"
        value={student.rollNo}
        onChange={handleChange}
        placeholder="Enter roll number"
        required
      />

      <label>Department</label>
      <select
        name="department"
        value={student.department}
        onChange={handleChange}
        required
      >
        <option value="">Select Department</option>
        <option value="IT">Information Technology</option>
        <option value="Computer">Computer Engineering</option>
        <option value="ENTC">ENTC</option>
        <option value="Mechanical">Mechanical</option>
        <option value="Civil">Civil</option>
      </select>

      <label>Marks (out of 100)</label>
      <input
        type="number"
        name="marks"
        value={student.marks}
        onChange={handleChange}
        placeholder="Enter marks"
        min="0"
        max="100"
        required
      />

      <button type="submit">Submit Student Details</button>
    </form>
  );
}

export default StudentForm;
