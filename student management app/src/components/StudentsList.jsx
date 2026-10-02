import React, { useEffect, useState } from 'react';
import useStudentStore from '../store/studentStore';
import EditStudent from './EditStudent';
import DeleteModal from './DeleteModal';
import StudentDetail from './StudentDetail';
import SearchFilter from './SearchFilter';

// 📋 MEMBER 2: STUDENT LIST COMPONENT
// Displays all students with options to view, edit, and delete

function StudentList() {
  const { fetchStudents, loading, getFilteredStudents } = useStudentStore();
  
  const [editingStudent, setEditingStudent] = useState(null);
  const [deletingStudent, setDeletingStudent] = useState(null);
  const [viewingStudent, setViewingStudent] = useState(null);

  // Fetch students when component mounts
  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  // Get filtered students (Member 4's search/filter logic)
  const students = getFilteredStudents();

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <span className="ml-4 text-xl text-gray-600">Loading students...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Search and Filter - Member 4 */}
      <SearchFilter />

      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Student List</h2>
          <span className="text-gray-600 bg-blue-100 px-4 py-2 rounded-full">
            {students.length} student{students.length !== 1 ? 's' : ''}
          </span>
        </div>

        {students.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-xl">No students found</p>
            <p className="mt-2">Try adjusting your search or filters</p>
          </div>
        ) : (
          <>
            {/* Table View for Desktop */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Student
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Student ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Grade
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {students.map((student) => (
                    <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{student.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{student.studentID}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {student.grade}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div>{student.email || 'N/A'}</div>
                        <div className="text-xs">{student.phone || 'N/A'}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                        <button
                          onClick={() => setViewingStudent(student)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          View
                        </button>
                        <button
                          onClick={() => setEditingStudent(student)}
                          className="text-yellow-600 hover:text-yellow-900"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => setDeletingStudent(student)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Card View for Mobile */}
            <div className="md:hidden space-y-4">
              {students.map((student) => (
                <div key={student.id} className="bg-gray-50 rounded-lg p-4 shadow">
                  <div className="flex items-center mb-3">
                    <div className="ml-4">
                      <h3 className="font-bold text-lg">{student.name}</h3>
                      <p className="text-sm text-gray-600">{student.studentID}</p>
                    </div>
                  </div>
                  <div className="space-y-1 mb-3">
                    <p className="text-sm">
                      <span className="font-medium">Grade:</span>{' '}
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                        {student.grade}
                      </span>
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Email:</span> {student.email || 'N/A'}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Phone:</span> {student.phone || 'N/A'}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setViewingStudent(student)}
                      className="flex-1 py-2 px-3 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
                    >
                      View
                    </button>
                    <button
                      onClick={() => setEditingStudent(student)}
                      className="flex-1 py-2 px-3 bg-yellow-600 text-white rounded-lg text-sm hover:bg-yellow-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => setDeletingStudent(student)}
                      className="flex-1 py-2 px-3 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Modals */}
      {editingStudent && (
        <EditStudent
          student={editingStudent}
          onClose={() => setEditingStudent(null)}
        />
      )}

      {deletingStudent && (
        <DeleteModal
          student={deletingStudent}
          onClose={() => setDeletingStudent(null)}
        />
      )}

      {viewingStudent && (
        <StudentDetail
          student={viewingStudent}
          onClose={() => setViewingStudent(null)}
          onEdit={() => {
            setEditingStudent(viewingStudent);
            setViewingStudent(null);
          }}
        />
      )}
    </div>
  );
}

export default StudentList;
