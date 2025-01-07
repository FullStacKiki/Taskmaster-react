import React from 'react'

import { Link } from 'react-router-dom';
const Bar = () => {
  return (
    <div>
      <nav className=" overflow-hidden text-sm font-normal text-slate-600 font-body flex justify-center gap-5 p-4 list-none bg-gray-50 shadow-xl fixed top-0 left-1/2 transform -translate-x-1/2 rounded-lg w-max mt-2">
        <Link className='hover:text-blue-400 hover:underline' to="/">Home</Link>
        <Link className='hover:text-blue-400 hover:underline' to="/pricing">Pricing</Link>
        <Link className='hover:text-blue-400 hover:underline' to="/settings">Settings</Link>
      </nav>
    </div>
  )
}

export default Bar

