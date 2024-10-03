import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './Components/User/Shared/Navbar'
import Footer from './Components/User/Shared/Footer';
import HomePage from './Components/User/Home/HomePage';
import Sidebar from './Components/Admin/Sidebar';
import AdminNavbar from './Components/Admin/AdminNavbar';
import AddUserDeleteUser from './Components/Admin/AddUserDeleteUser';
import AddRoomDeleteRoom from './Components/Admin/AddRoomDeleteRoom';
import AddHotelDeleteHotel from './Components/Admin/AddHotelDeleteHotel';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        {/* For User site */}
        <Routes>
          {/* User Site Navbar */}
          <Route path="*" element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/blogs" element={<Blogs />} />
                <Route path="/library" element={<Library />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/executive" element={<ExecutiveCom />} />
                <Route path="/activities" element={<Activities />} /> */}
              </Routes>
              <Footer />
            </>
          } />

          {/* For Admin Panel */}
          <Route path="/admin/*" element={
            <div className="flex h-screen"> {/* Full height layout */}
              {/* Sidebar (30% width) */}
              <Sidebar className="w-1/4" /> {/* Sidebar 30% */}

              {/* Main content container */}
              <div className="flex-1 flex flex-col"> {/* Remaining 70% */}
                {/* Admin Navbar */}
                <AdminNavbar className="w-full h-16" /> {/* Full width Navbar at top */}

                {/* Main content area */}
                <div className="flex-1 p-4 bg-gray-100"> {/* Main content, padding for spacing */}
                  <Routes>
                    {/* Define admin routes */}
                    <Route path="add-delete-user" element={<AddUserDeleteUser />} />
                    <Route path="add-delete-room" element={<AddRoomDeleteRoom />} />
                    <Route path="add-delete-hotel" element={<AddHotelDeleteHotel />} />
                  </Routes>
                </div>
              </div>
            </div>
          } />
        </Routes>
      </Router>

    </>
  )
}

export default App
