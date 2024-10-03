import React, { useState } from 'react';

const AddUserDeleteUser = () => {
  const [isAdding, setIsAdding] = useState(true); // Toggle between add and delete forms

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{isAdding ? 'Add User' : 'Delete User'}</h2>
      
      {/* Toggle Button */}
      <div className="mb-4">
        <button
          className={`px-4 py-2 mr-2 ${isAdding ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'}`}
          onClick={() => setIsAdding(true)}
        >
          Add User
        </button>
        <button
          className={`px-4 py-2 ${!isAdding ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'}`}
          onClick={() => setIsAdding(false)}
        >
          Delete User
        </button>
      </div>

      {/* Form for Add/Delete User */}
      {isAdding ? (
        <form>
          <label className="block mb-2">Username</label>
          <input className="border border-gray-300 p-2 rounded w-full mb-4" type="text" placeholder="Enter username" />
          <label className="block mb-2">Email</label>
          <input className="border border-gray-300 p-2 rounded w-full mb-4" type="email" placeholder="Enter email" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add User</button>
        </form>
      ) : (
        <form>
          <label className="block mb-2">User ID</label>
          <input className="border border-gray-300 p-2 rounded w-full mb-4" type="text" placeholder="Enter User ID to delete" />
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Delete User</button>
        </form>
      )}
    </div>
  );
};

export default AddUserDeleteUser;
