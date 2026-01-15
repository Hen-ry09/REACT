import React from 'react'
import useUsersStore from '../store/usersStore'
import { useState } from 'react'

const TodoForms = () => {
  const addNewUser = useUsersStore((state)=>state.addNewUser)

  //usestate
  const [name, setName] = useState("");
  const [email , setEmail] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) =>{
    setEmail(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      name: name,
      email: email,
    };

    console.log(newUser);

    addNewUser(newUser);
    setName("");
    setEmail("");
  }
  return (
    <>
    <div className='flex items-center justify-center'>
      <div className='text-center items-center justify-center'>
        <form className='mt-10 bg-gray-800 w-[1000px] h-85 rounded-xl shadow-lg max-w-md mx-auto space-y-6' onSubmit={handleSubmit}>
          <h1 className='text-4xl font-extrabold p-5'>get in touch</h1>
          <input className='ml-10 p-3 border-indigo-600 h-10 rounded-lg w-70' type="text" id="name" placeholder='type name' value={name} onChange={handleName}/>
          <input className='ml-10 p-3 border-indigo-600 h-10 rounded-lg w-70'  type="text" id="email" placeholder='type email' value={email} onChange={handleEmail}></input>
          <button>submit</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default TodoForms