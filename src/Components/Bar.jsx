import React from 'react'

const Bar = () => {
  return (
    <div>
      <nav className=" overflow-hidden text-sm font-normal text-slate-600 font-body flex justify-center gap-5 p-4 list-none bg-gray-50 shadow-xl fixed top-0 left-1/2 transform -translate-x-1/2 rounded-lg w-max mt-2">
        <li><a className='hover:text-blue-400 hover:underline' href="#">Home</a></li>
        <li><a className='hover:text-blue-400 hover:underline' href="#">Pricing</a></li>
        <li><a className='hover:text-blue-400 hover:underline' href="#">Get Started</a></li>
      </nav>
    </div>
  )
}

export default Bar

