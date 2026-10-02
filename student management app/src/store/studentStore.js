import { create } from 'zustand';
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc,
  Timestamp 
} from 'firebase/firestore';
import { db} from '../services/firebase';



// 🏪 ZUSTAND STORE - Shared by all team members
// This is your central state management for the entire app

const useStudentStore = create((set, get) => ({
  // ==================== STATE ====================
  students: [],           // Array of all students
  loading: false,         // Loading state for operations
  error: null,           // Error messages
  searchQuery: '',       // For Member 4: Search functionality
  filterGrade: 'all',    // For Member 4: Filter by grade

  // ==================== MEMBER 1: CREATE ====================
  // Add a new student to Firestore
  addStudent: async (studentData) => {
    set({ loading: true, error: null });
    
    try {
    //   let profilePictureURL = '';
      
      // // Upload profile picture if provided
      // if (profileImage) {
      //   const imageRef = ref(storage, `students/${Date.now()}_${profileImage.name}`);
      //   await uploadBytes(imageRef, profileImage);
      //   profilePictureURL = await getDownloadURL(imageRef);
      // }

      // Add student to Firestore
      const docRef = await addDoc(collection(db, 'students'), {
        ...studentData,
        // profilePicture: profilePictureURL,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      });

      // Add to local state
      const newStudent = {
        id: docRef.id,
        ...studentData,
        // profilePicture: profilePictureURL,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      };

      set((state) => ({
        students: [...state.students, newStudent],
        loading: false
      }));

      return { success: true, message: 'Student added successfully!' };
    } catch (error) {
      set({ loading: false, error: error.message });
      return { success: false, message: error.message };
    }
  },

  // ==================== MEMBER 2: READ ====================
  // Fetch all students from Firestore
  fetchStudents: async () => {
    set({ loading: true, error: null });
    
    try {
      const querySnapshot = await getDocs(collection(db, 'students'));
      const studentsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      set({ students: studentsData, loading: false });
      return { success: true };
    } catch (error) {
      set({ loading: false, error: error.message });
      return { success: false, message: error.message };
    }
  },

  // ==================== MEMBER 3: UPDATE ====================
  // Update an existing student
  updateStudent: async (studentId, updatedData) => {
    set({ loading: true, error: null });
    
    try {
      // let profilePictureURL = updatedData.profilePicture;

      // // Upload new profile picture if provided
      // if (newProfileImage) {
      //   const imageRef = ref(storage, `students/${Date.now()}_${newProfileImage.name}`);
      //   await uploadBytes(imageRef, newProfileImage);
      //   profilePictureURL = await getDownloadURL(imageRef);
      // }

      // Update in Firestore
      const studentRef = doc(db, 'students', studentId);
      await updateDoc(studentRef, {
        ...updatedData,
        // profilePicture: profilePictureURL,
        updatedAt: Timestamp.now()
      });

      // Update local state
      set((state) => ({
        students: state.students.map((student) =>
          student.id === studentId
            ? { ...student, ...updatedData, }
            : student
        ),
        loading: false
      }));

      return { success: true, message: 'Student updated successfully!' };
    } catch (error) {
      set({ loading: false, error: error.message });
      return { success: false, message: error.message };
    }
  },

  // ==================== MEMBER 3: DELETE ====================
  // Delete a student
  deleteStudent: async (studentId) => {
    set({ loading: true, error: null });
    
    try {
      // Delete from Firestore
      await deleteDoc(doc(db, 'students', studentId));

      // Update local state
      set((state) => ({
        students: state.students.filter((student) => student.id !== studentId),
        loading: false
      }));

      return { success: true, message: 'Student deleted successfully!' };
    } catch (error) {
      set({ loading: false, error: error.message });
      return { success: false, message: error.message };
    }
  },

  // ==================== MEMBER 4: SEARCH & FILTER ====================
  // Set search query
  setSearchQuery: (query) => set({ searchQuery: query }),

  // Set filter grade
  setFilterGrade: (grade) => set({ filterGrade: grade }),

  // Get filtered students (used by Member 4)
  getFilteredStudents: () => {
    const { students, searchQuery, filterGrade } = get();
    
    let filtered = students;

    // Filter by grade
    if (filterGrade !== 'all') {
      filtered = filtered.filter((student) => student.grade === filterGrade);
    }

    // Filter by search query (name or studentID)
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (student) =>
          student.name.toLowerCase().includes(query) ||
          student.studentID.toLowerCase().includes(query)
      );
    }

    return filtered;
  },
}));

export default useStudentStore;
