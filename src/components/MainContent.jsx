import { Outlet } from "react-router-dom";
import React from 'react'

const MainContent = () => {
  return (
    <section className="sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 h-screen">
        <Outlet />
      </div>
    </section>
  )
}

export default MainContent