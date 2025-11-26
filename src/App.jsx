import './App.css'
import TodoForm from './component/TodoForm'
import { useState } from 'react'
import TodoList from './component/TodoList';

function App() {
const [user, SetUser] = useState([
{name:"Henry" , email:"Henryschandorf@gmail.com" , id: crypto.randomUUID()},
{name:"Kayzier" , email:"Kayzierlartey@gmail.com" , id: crypto.randomUUID()},
]);

//add new user function

const addNewUser = (newUser) =>{
  SetUser([...user,newUser]);
}


  return (
    <>
    <div className='flex justify-between'>
    <TodoForm addUser={addNewUser} />
    <TodoList user={user} />
    </div>
     
    </>
  )
}

export default App;
