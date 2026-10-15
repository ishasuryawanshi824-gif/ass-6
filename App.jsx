
import { useState } from "react";
import StudentForm from "./StudentForm";
import StudentDetails from "./StudentDetails";
import "./App.css";

function App() {
  const [student, setStudent] = useState(null);

  return (
    <div className="app">
      <h1>Student Information Application</h1>
      <StudentForm onSubmitStudent={setStudent} />
      <StudentDetails student={student} />
    </div>
  );
}

export default App;
