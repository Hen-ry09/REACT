import React from 'react'
import { useState } from 'react'
import useStudentStore from '../store/studentStore';

const AddStudent = () => {
  const {addStudent,loading} = useStudentStore();

  const [formData,setFormData] = useState({
    name: '',
    studentId: '',
    grade: '',
    email: '',
    phone: '',
  });

  const [message,setMessage] = useState({type:'', text: ''});

  //handle input changes
  const handleChange = (e) => {
    const { name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  //Handle form submission 
  const handleSubmit = async (e) => {
    e.preventDefault();


  //Add student
  const result = await addStudent(formData)

  if(result.success){
    setMessage({type: 'success', text: result.message})
    //reset form
    setFormData({
      name: '',
      studentId: '',
      grade: '',
      email: '',
      phone: ''
    });

    //clear message after 3 seconds
    setTimeout(()=> setMessage({type: '', text: ''}),3000);
  }else{
    setMessage({type:'error',text:result.message});
  }
  };

  return(
    <div className='max-w-2xl mx-auto p-6'>
      <div className='bg-white rounded-lg shadow-lg p-8'>
        <h2 className='text-3xl font-bold text-gray-800 mb-6'>Add New Student</h2>
        {/*success/error message*/}
        {message.text && (
          <div
            className={`mb-4 p-4 rounded-lg ${
              message.type === 'success'
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {message.text}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          {/*name*/}
          <div>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-2'>
              Full Name <span className='text-red-500'>*</span>
            </label>
            <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter student's full name"></input>
          </div>

          {/* Student ID */}
          <div>
            <label htmlFor="studentID" className="block text-sm font-medium text-gray-700 mb-2">
              Student ID <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="studentID"
              name="studentID"
              value={formData.studentID}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., STU2024001"
            />
          </div>

          {/* Grade */}
          <div>
            <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-2">
              Grade/Class <span className="text-red-500">*</span>
            </label>
            <select
              id="grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select grade</option>
              <option value="Grade 1">Grade 1</option>
              <option value="Grade 2">Grade 2</option>
              <option value="Grade 3">Grade 3</option>
              <option value="Grade 4">Grade 4</option>
              <option value="Grade 5">Grade 5</option>
              <option value="Grade 6">Grade 6</option>
              <option value="Grade 7">Grade 7</option>
              <option value="Grade 8">Grade 8</option>
              <option value="Grade 9">Grade 9</option>
              <option value="Grade 10">Grade 10</option>
              <option value="Grade 11">Grade 11</option>
              <option value="Grade 12">Grade 12</option>
            </select>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="student@example.com"
            />
          </div>

           {/* Phone */}
           <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="+1234567890"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-4 rounded-lg text-white font-semibold transition-colors ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {loading ? 'Adding Student...' : 'Add Student'}
          </button>

        </form>


      </div>

    </div>
  )

  }



export default AddStudent