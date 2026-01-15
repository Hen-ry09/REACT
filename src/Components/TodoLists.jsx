import React from 'react'
import useUsersStore from '../store/usersStore'

const TodoLists = () => {
  const users = useUsersStore((state)=>state.users);
  return (
    <div>
      <h1>my list</h1>
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            </div>
        ); 
      })}
    </div>
    </div>
  );
};

export default TodoLists