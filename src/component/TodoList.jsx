import React from 'react'
import TodoItem from './TodoItem';

function TodoList(props) {
  return (
    <>
    {props.user.map((eachUser) =>{
      return (
        <>
      <h1>{eachUser.name}</h1>
      <h1>{eachUser.email}</h1>
      </>
      )
    })}
    </>
  )
}

export default TodoList;