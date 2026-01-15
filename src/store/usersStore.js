import { create } from "zustand";


const useUsersStore = create((set)=>({
  users:[
    {name:"Henry" , email:"Henryschandorf@gmail.com" , contact: "+233 54667678"},
  ],

  addNewUser:(newUser) => set((state)=>({
    users:[...state.user,{...newUser,id: Date.now()}]
  }))
}));

export default useUsersStore;