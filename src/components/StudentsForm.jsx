// // 🆕 IMPORTING useState FROM REACT:
// // Even though we are using Zustand, we STILL need useState
// // because form inputs (name and course) are LOCAL to this component.
// import { useState } from "react";

// // 🆕 IMPORTING THE ZUSTAND STORE:
// // This gives this component access to the GLOBAL students store.
// // From here, we can read state or call actions like addStudents().
// import useStuedentsStore from "../store/studentsStore";

// const StudentForm = () => {

//   // ✅ STILL LOCAL STATE:
//   // These are form inputs, so they remain local to this component.
//   const [name, setName] = useState("");
//   const [course, setCourse] = useState("");

//   // 🆕 NEW (ZUSTAND):
//   // We are getting the ADD action from the global store.
//   // This replaces the setStudents function that was passed as props before.
//   const addStudents = useStuedentsStore((state) => state.addStudents);
 
//   const handleSubmit = (e) => {
//     e.preventDefault();

   
     

//     // ✅ VALIDATION (UNCHANGED):
//     // We prevent empty form submission.
//     if (!name.trim() || !course.trim()) {
//       alert("Please fill the form");
//       return;
//     }

//     // ✅ SAME DATA STRUCTURE AS BEFORE:
//     // We are still creating a student object the same way.
//     // const newStudent = {
//     //   id: Date.now(),
//     //   name,
//     //   course,
//     // };

   

//     // 🔁 CHANGED:
//     // Instead of updating local state through props,
//     // we now send the new student to the global store.
//     addStudents({name, course});

//     // ✅ RESET FORM INPUTS (UNCHANGED):
//     setName("");
//     setCourse("");
//   };

//   return (
//     <form onSubmit={handleSubmit} style={formStyle}>
//       <input
//         placeholder="Enter Your Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         style={inputStyle}
//       />
//       <input
//         placeholder="Enter The Course"
//         value={course}
//         onChange={(e) => setCourse(e.target.value)}
//         style={inputStyle}
//       />
//       <button style={buttonStyle}>Add Student</button>
//     </form>
//   );
// };

// export default StudentForm;

// // 🎨 STYLES ONLY — NO STATE OR LOGIC CHANGES
// const formStyle = {
//   display: "flex",
//   flexDirection: "column",
//   gap: "10px",
// };

// const inputStyle = {
//   padding: "8px",
//   borderRadius: "6px",
//   border: "1px solid #ccc",
// };

// const buttonStyle = {
//   padding: "8px",
//   backgroundColor: "#4CAF50",
//   color: "white",
//   border: "none",
//   borderRadius: "6px",
// };


// ✅ IMPORT useState FROM REACT
// We still use useState for form inputs (local state)
import { useState } from "react";

// ✅ IMPORT ZUSTAND STORE
// Gives access to the global students store
import useStuedentsStore from "../store/studentsStore";

const StudentForm = () => {

  // ✅ LOCAL STATE (Form Inputs)
  // These belong only to this component
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  // ✅ GET addStudents ACTION FROM STORE
  // This connects this component to Zustand
  const addStudents = useStuedentsStore(
    (state) => state.addStudents
  );

  // ✅ HANDLE FORM SUBMISSION
  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ PREVENT EMPTY SUBMISSION
    if (!name.trim() || !course.trim()) {
      alert("Please fill the form");
      return;
    }

    // ✅ SEND DATA TO ZUSTAND STORE
    // The store will generate the ID
    addStudents({
      name,
      course,
    });

    // ✅ RESET FORM AFTER SUBMIT
    setName("");
    setCourse("");
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>

      {/* Name Input */}
      <input
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={inputStyle}
      />

      {/* Course Input */}
      <input
        placeholder="Enter The Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        style={inputStyle}
      />

      {/* Submit Button */}
      <button style={buttonStyle}>
        Add Student
      </button>

    </form>
  );
};

export default StudentForm;

// 🎨 STYLES (NO LOGIC)
const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const inputStyle = {
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  padding: "8px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "6px",
};

