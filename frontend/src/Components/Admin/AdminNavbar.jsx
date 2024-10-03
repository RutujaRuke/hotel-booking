import React from 'react';

const AdminNavbar = () => {
  return (
    <div className="w-full h-16 bg-white shadow-lg flex items-center justify-between px-6">
      {/* Notifications */}
      <div className="relative">
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118.6 14H17V9a5 5 0 10-10 0v5H5.4a2.032 2.032 0 01-1.995 1.595L3 17h5m7 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
        </svg>
        <span className="absolute top-0 right-0 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></span>
      </div>
      
      {/* Admin Profile */}
      <div className="flex items-center">
        <img className="w-8 h-8 rounded-full mr-2" src="https://via.placeholder.com/150" alt="Admin" />
        <span className="font-semibold text-gray-700">Admin</span>
      </div>
    </div>
  );
};

export default AdminNavbar;
