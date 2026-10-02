import React from 'react'
import useStudentStore from '../store/studentStore'
import { useState } from 'react';

//Delete confirmation modal
//confirms before deleting a student 

const DeleteModal = ({student,onClose}) => {
  const{deleteStudent, loading} = useStudentStore();
  const [message, setMessage] = useState({type:'',text:''});

  const handleDelete = async () => {
    const result = await deleteStudent(student.id);

    if (result.success) {
      setMessage({ type: 'success', text: result.message });
      setTimeout(() => {
        onClose();
      }, 1000);
    } else {
      setMessage({ type: 'error', text: result.message });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-lg shadow-2xl max-w-md w-full">
      {message.text ? (
        <div className="p-8">
          <div
            className={`p-4 rounded-lg text-center ${
              message.type === 'success'
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {message.text}
          </div>
        </div>
      ) : (
        <>
          <div className="p-8">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                Delete Student?
              </h3>
              <div className="ml-3">
                    <p className="font-semibold text-gray-900">{student.name}</p>
                    <p className="text-sm text-gray-600">{student.studentID}</p>
                    <p className="text-xs text-gray-500">{student.grade}</p>
                  </div>
                </div>
                <p className="text-center text-gray-600 mb-6">
                This action cannot be undone. All student data will be permanently deleted.
              </p>

              <div className="flex space-x-4">
                <button
                  onClick={handleDelete}
                  disabled={loading}
                  className={`flex-1 py-3 px-4 rounded-lg text-white font-semibold transition-colors ${
                    loading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-red-600 hover:bg-red-700'
                  }`}
                >
                  {loading ? 'Deleting...' : 'Yes, Delete'}
                </button>
                <button
                  onClick={onClose}
                  disabled={loading}
                  className="flex-1 py-3 px-4 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
          </>
        )}
        </div>
        </div>            

  )
}

export default DeleteModal