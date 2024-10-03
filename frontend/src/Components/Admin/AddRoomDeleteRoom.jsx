import React, { useState } from 'react';

const AddRoomDeleteRoom = () => {
  const [isAdding, setIsAdding] = useState(true); // Toggle between add and delete forms

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{isAdding ? 'Add Room' : 'Delete Room'}</h2>
      
      {/* Toggle Button */}
      <div className="mb-4">
        <button
          className={`px-4 py-2 mr-2 ${isAdding ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'}`}
          onClick={() => setIsAdding(true)}
        >
          Add Room
        </button>
        <button
          className={`px-4 py-2 ${!isAdding ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'}`}
          onClick={() => setIsAdding(false)}
        >
          Delete Room
        </button>
      </div>

      {/* Form for Add/Delete Room */}
      {isAdding ? (
        <form>
          <label className="block mb-2">Room Name</label>
          <input className="border border-gray-300 p-2 rounded w-full mb-4" type="text" placeholder="Enter room name" />
          <label className="block mb-2">Room Price</label>
          <input className="border border-gray-300 p-2 rounded w-full mb-4" type="number" placeholder="Enter room price" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Room</button>
        </form>
      ) : (
        <form>
          <label className="block mb-2">Room ID</label>
          <input className="border border-gray-300 p-2 rounded w-full mb-4" type="text" placeholder="Enter Room ID to delete" />
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Delete Room</button>
        </form>
      )}
    </div>
  );
};

export default AddRoomDeleteRoom;
