import React, { useEffect, useState } from 'react'
const ChildComponent = () => {
  //Creating a State for our life cycle
  const [count, setCount] = useState(0);
  //1. Creating a Life Cycle using Use Effect
  useEffect(() => {
    console.log("Component mounted"), [];
    return () => {
      console.log("Component Unmounted");
    };
  });
  //2. Updating or Changing the Component
  useEffect(() => {
    console.log("Component Updated"), [count];
  });
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Here To Count
      </button>
    </div>
  );
};
  


export default ChildComponent