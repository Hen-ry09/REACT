import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
import ApiComponents from "./APIcomponent";
const App = () => {
  //Create a State to help unmount the component
  
  const [show, setShow] = useState(true);
  //Create a function to unmount the component
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div>
      {show && <ChildComponent />}
      <button onClick={handleShow}>Unmount Component</button>
      <ApiComponents />
    </div>
  );
};
export default App;