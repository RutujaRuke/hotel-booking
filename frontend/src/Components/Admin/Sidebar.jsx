

import React from 'react';
import { Link } from 'react-router-dom';
import { FaHotel, FaBed, FaCalendarAlt, FaUserEdit, FaUsers, FaHome } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen md:w-1/4"> {/* Sidebar takes 25% width on larger screens */}
      {/* Header */}
      <div className="p-4 text-2xl font-bold border-b border-gray-700">Hotel Admin</div>
      
      {/* Sidebar Links */}
      <ul className="mt-6 space-y-4 p-4">
        <li>
          <Link to="/admin/dashboard" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
            <FaHome />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/add-delete-hotel" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
            <FaHotel />
            <span>Add/Delete Hotel</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/add-delete-room" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
            <FaBed />
            <span>Add/Delete Room</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/service-booking" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
            <FaCalendarAlt />
            <span>Service Booking</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/user-management" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
            <FaUserEdit />
            <span>User Management</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/membership-management" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
            <FaUsers />
            <span>Membership Management</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
