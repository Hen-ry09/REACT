
// ✅ ZUSTAND STORE (LOCAL ONLY - NO FIREBASE)

import { create } from "zustand";
import { db } from "../services/firebase";

import { collection,addDoc,getDocs,deleteDoc,doc,updateDoc } from "firebase/firestore";

// useStuedentsStore is the name of our global store hook
const useStuedentsStore = create((set,get) => ({
  // ✅ STORE ITEM (1): Global State (students array)
  students: [],

  // ✅ STORE ITEM (2): ADD Student (CREATE)
  // Adds a new student to the store with a unique id
  addStudents: async (student) =>{
   //1) save to firestore
   const docRef = await addDoc(collection(db,"students"),student)
   set((state) => ({
     students: [...state.students, { ...student, id: docRef.id }],
    
   })),
   console.log(docRef.id)

   //2) update zustand so it updates UI instantly
   set({
    students :[...get().students,{id: docRef.id,...student}] 
   })
  },
   

  // ✅ STORE ITEM (3): FETCH Students (READ)
  // Since we have NO Firebase, fetching just means "return what is already in state"
  // You can still call fetchStudents() in useEffect if you want that pattern.
  fetchStudents:  async () => {
    //1) read all students from firestore - in firestore format
    const snapshot =  await getDocs(collection(db,"students"));

    //2)
    const studentData = snapshot.docs.map((docSnap,index)=>({
      key:index,
      id: docSnap.id,
      ...docSnap.data(),
    }));

    //console.log(docSnap.id)

   //3) save into zustand
   set({students: studentData})
    return;
  },

  // ✅ STORE ITEM (4): DELETE Student (DELETE)
  deleteStudent: async (id) =>{
    //1) delete from fire store using the document id
    await deleteDoc(doc(db,"students",id));

    //2) update zustand(remove from local UI list instantly)
    set({
      students: get().students.filter((student)=> student.id !== id)
    })
  },
    

  // ✅ STORE ITEM (5): UPDATE Student (UPDATE)
  updateStudent: async (id, updateData) => {

    await updateDoc(doc(db,"students",id),updateData);

    set({
      students: get().students.map((student)=>
        student.id === id ? {...student,...updateData} : student
      ),
    })
  }
    
}));

export default useStuedentsStore;
