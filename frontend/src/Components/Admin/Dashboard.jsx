import React, { useState } from 'react';
import Sidebar from './Sidebar';
import AdminNavbar from './AdminNavbar';
import AddUserDeleteUser from './AddUserDeleteUser';
import AddRoomDeleteRoom from './AddRoomDeleteRoom';
import AddHotelDeleteHotel from './AddHotelDeleteHotel';

const Dashboard = () => {
  const [activePage, setActivePage] = useState('AddUserDeleteUser');

  const renderContent = () => {
    switch (activePage) {
      case 'AddUserDeleteUser':
        return <AddUserDeleteUser />;
      case 'AddRoomDeleteRoom':
        return <AddRoomDeleteRoom />;
      case 'AddHotelDeleteHotel':
        return <AddHotelDeleteHotel />;
      default:
        return <AddUserDeleteUser />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar (Left) */}
      <Sidebar setActivePage={setActivePage} />
      
      {/* Main Content (Right) */}
      <div className="flex-1">
        <AdminNavbar />
        <div className="p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
