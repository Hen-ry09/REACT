import React from 'react'

function TodoItem(props) {
  return (
    <>
    <h1>{props.singleUser.name}</h1>
    <h1>{props.singleUser.email}</h1>
    </>
  )
}

export default TodoItem;