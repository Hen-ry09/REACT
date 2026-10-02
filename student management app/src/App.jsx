import { useState } from 'react';
import AddStudent from './components/AddStudent'
import StudentList from './components/StudentsList'
import React from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('add');

 
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    {/* Header */}
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-4xl font-bold text-gray-800">
          🎓 School Management System
        </h1>
        <p className="text-gray-600 mt-2">
          Manage student records efficiently
        </p>
      </div>
    </header>

    {/* Navigation Tabs */}
    <div className="max-w-7xl mx-auto px-4 mt-8">
      <div className="bg-white rounded-lg shadow-md p-2 flex space-x-2">
        <button
          onClick={() => setActiveTab('add')}
          className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors ${
            activeTab === 'add'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          ➕ Add Student
        </button>
        <button
          onClick={() => setActiveTab('list')}
          className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors ${
            activeTab === 'list'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          📋 Student List
        </button>
      </div>
    </div>

    {/* Content */}
    <main className="py-8">
      {activeTab === 'add' && <AddStudent />}
      {activeTab === 'list' && <StudentList />}
    </main>

    {/* Footer */}
    <footer className="bg-white shadow-md mt-12">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-600">
        <p>Built with React, Firebase & Zustand by Team 1 🚀</p>
      </div>
    </footer>
  </div>
  )
}

export default App
