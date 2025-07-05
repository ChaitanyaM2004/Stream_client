import React from 'react'
import { FaBars, FaSearch, FaVideo, FaBell, FaUserCircle } from "react-icons/fa";

export default function Header() {
  return (
  <header className="flex items-center justify-between px-4 py-2 bg-white shadow-md sticky top-0 z-50">
  <div className="flex items-center space-x-4">
    <FaBars className='text-xl cursor-pointer'/>
    <h1 className="text-xl font-bold text-blue-600">Stream</h1>
  </div>
  <div className="flex flex-grow max-w-xl items-center justify-center">
    <input
      type="text"
      placeholder="Search"
      className="w-full border border-gray-300 px-4 py-1 rounded-full focus:outline-none"
    />
    <button className="bg-gray-100 px-4 py-1 rounded-full border border-gray-300">
      <FaSearch/>
    </button>
  </div>
  <div className="flex items-center space-x-4">
    <FaVideo className='text-xl cursor-pointer'/>
    <FaBell className='text-xl cursor-pointer'/>
    <FaUserCircle className='text-2xl cursor-pointer'/>
    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
      Login / Sign Up
    </button>
  </div>
  </header>
  )
}
