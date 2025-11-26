import React, { useState } from 'react'

function TodoForm(props) {
  const [name, SetName] = useState("")
  const [email,SetEmail] = useState("")

  const handleName = (e) =>{
    SetName(e.target.value)
  }

  const handleEmail = (e) =>{
    SetEmail(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    let newUser = {
      name:name,
      email: email,
      id: crypto.randomUUID()
    };
    
    props.addUser(newUser)
    SetName("")
    SetEmail("")
  }
  return (
    <>
      <div className='bg-black min-h-screen w-[600px] p-4'>
        <h1 className='text-5xl font-bold text-white'>TODO FORM</h1>
        <div className='bg-lime-300 h-[400px]'>
          <form className='p-5 space-y-10' onSubmit={handleSubmit}>
            <div>
            <input value={name} onChange={handleName}type="text" placeholder="enter your name" className='p-4 w-[400px] border border-gray-500'></input>
            </div>
            <div>
            <input value={email} onChange={handleEmail} type="email" placeholder='enter your email' className='p-4 w-[400px] border border-gray-500'></input>
            </div> 
            <button onChange={handleSubmit} className='p-4 text-center bg-blue-600 w-[400px]'>submit</button>
          </form>
        </div>
        </div>
    </>
  
  )
}

export default TodoForm