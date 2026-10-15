
function StudentDetails({ student }) {
  if (!student) {
    return <p>Enter student details above.</p>;
  }

  return (
    <div className="student-details">
      <h2>Submitted Student Details</h2>
      <p>Name: {student.name}</p>
      <p>Roll Number: {student.rollNo}</p>
      <p>Department: {student.department}</p>
      <p>Marks: {student.marks}/100</p>
    </div>
  );
}

export default StudentDetails;
