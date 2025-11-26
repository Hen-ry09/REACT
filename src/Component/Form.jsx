import React from 'react'
import { useState } from 'react'

const Form = () => {
  //create state
  const [name,SetName]= useState("")
  const [email,SetEmail]= useState("")
  const [password,SetPassword]= useState("")

  //update
  const handleNameChange = (event) =>{
    SetName(event.target.value)
    console.log("name")
  }

  const handleEmailChnage = (event)=>{
    SetEmail(event.target.value)
    console.log("email")
  }

  const handlePasswordChange =(event)=>{
    SetPassword(event.target.value)
    console.log("password")
  }

  const handleSubmit = (e)=>{
   e.preventDefault();
   console.log("form submitted!")
   console.log({name,email,password});
    //alert
  alert(`welcome ${name}! check console for details`)
  }
 
  return (
    <>
     <div className="bg-red-400 p-20">
      <form>
        <input value={name} onChnage={handleNameChange} type="name" placeholder='enter your name'></input><br></br>
        <input value={email} onChange={handleEmailChnage} type="email" placeholder='enter your email'></input><br></br>
        <input value={password} onChange={handlePasswordChange} type="password" placeholder='enter your password'></input><br></br>
        <input type="submit"/>

      </form>
    </div>
    </>
   
  )
}

export default Form