import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
     <div>

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div
        style={{
          marginLeft: "250px", // push content right
          width: "calc(100% - 250px)"
        }}
      >
        {/* Navbar */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: "250px",
            right: 0,
            zIndex: 1000
          }}
        >
          <Navbar />
        </div>

        {/* Page Content */}
        <div
          style={{
            marginTop: "70px", // navbar height
            padding: "20px",
            height: "calc(100vh - 70px)",
            overflowY: "auto"
          }}
        >
          <Outlet />
        </div>
      </div>

    </div>
  )
}

export default Dashboard
