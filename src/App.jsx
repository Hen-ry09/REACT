import React from "react"
import { useState } from "react"


function App() {
  const [count, setCount] = useState(0)

  const handleClick = ()=>{
    setCount(count + 1)
  }

  return (
    <>
  <h1>Number Counter</h1>
  <p>{count}</p>
  <button onClick={handleClick}>click</button>
    </>
  )
}

export default App 
