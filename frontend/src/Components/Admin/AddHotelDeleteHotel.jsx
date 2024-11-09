import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddHotelDeleteHotel = () => {
  const [isAdding, setIsAdding] = useState(true);
  const [hotels, setHotels] = useState([]);
  const [hotelName, setHotelName] = useState('');
  const [hotelLocation, setHotelLocation] = useState('');
  const [hotelId, setHotelId] = useState('');

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/hotels/all');
      setHotels(response.data.hotels);
    } catch (error) {
      console.error('Error fetching hotels:', error);
    }
  };

  const addHotel = async () => {
    try {
      await axios.post('http://localhost:5000/api/hotels/add', {
        name: hotelName,
        location: hotelLocation,
      });
      fetchHotels();
      setHotelName('');
      setHotelLocation('');
    } catch (error) {
      console.error('Error adding hotel:', error);
    }
  };

  const deleteHotel = async () => {
    try {
      await axios.delete('http://localhost:5000/api/hotels/delete', { data: { id: hotelId } });
      fetchHotels();
      setHotelId('');
    } catch (error) {
      console.error('Error deleting hotel:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{isAdding ? 'Add Hotel' : 'Delete Hotel'}</h2>

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

      {isAdding ? (
        <form onSubmit={(e) => { e.preventDefault(); addHotel(); }}>
          <label className="block mb-2">Hotel Name</label>
          <input
            className="border border-gray-300 p-2 rounded w-full mb-4"
            type="text"
            value={hotelName}
            onChange={(e) => setHotelName(e.target.value)}
            placeholder="Enter hotel name"
          />
          <label className="block mb-2">Hotel Location</label>
          <input
            className="border border-gray-300 p-2 rounded w-full mb-4"
            type="text"
            value={hotelLocation}
            onChange={(e) => setHotelLocation(e.target.value)}
            placeholder="Enter hotel location"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Hotel</button>
        </form>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); deleteHotel(); }}>
          <label className="block mb-2">Hotel ID</label>
          <input
            className="border border-gray-300 p-2 rounded w-full mb-4"
            type="text"
            value={hotelId}
            onChange={(e) => setHotelId(e.target.value)}
            placeholder="Enter Hotel ID to delete"
          />
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Delete Hotel</button>
        </form>
      )}

      <h3 className="text-xl font-bold mt-8 mb-4">Hotel List</h3>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id} className="border-b border-gray-300 py-2">
            {hotel.name} - {hotel.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddHotelDeleteHotel;
