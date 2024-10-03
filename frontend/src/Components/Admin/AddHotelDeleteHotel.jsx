import React, { useState } from 'react';

const AddHotelDeleteHotel = () => {
  const [isAdding, setIsAdding] = useState(true); // Toggle between add and delete forms

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{isAdding ? 'Add Hotel' : 'Delete Hotel'}</h2>
      
      {/* Toggle Button */}
      <div className="mb-4">
        <button
          className={`px-4 py-2 mr-2 ${isAdding ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'}`}
          onClick={() => setIsAdding(true)}
        >
          Add Hotel
        </button>
        <button
          className={`px-4 py-2 ${!isAdding ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'}`}
          onClick={() => setIsAdding(false)}
        >
          Delete Hotel
        </button>
      </div>

      {/* Form for Add/Delete Hotel */}
      {isAdding ? (
        <form>
          <label className="block mb-2">Hotel Name</label>
          <input className="border border-gray-300 p-2 rounded w-full mb-4" type="text" placeholder="Enter hotel name" />
          <label className="block mb-2">Hotel Location</label>
          <input className="border border-gray-300 p-2 rounded w-full mb-4" type="text" placeholder="Enter hotel location" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Hotel</button>
        </form>
      ) : (
        <form>
          <label className="block mb-2">Hotel ID</label>
          <input className="border border-gray-300 p-2 rounded w-full mb-4" type="text" placeholder="Enter Hotel ID to delete" />
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Delete Hotel</button>
        </form>
      )}
    </div>
  );
};

export default AddHotelDeleteHotel;
