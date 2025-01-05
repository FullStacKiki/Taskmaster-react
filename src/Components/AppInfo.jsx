import React from 'react'
import { DialogDemo } from './GetStarted'

const AppInfo = () => {
  return (
    <div className='w-1/2 mx-auto min-w-fit p-3 mt-44 ml-4 mr-4'>
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 text-3xl font-body text-center font-bold">Organize your time like never before</h1>
      <p className='font-body  font-normal mt-2 text-sm text-center'>The all-in-one web app to easily save, share, and manage your events. Streamline your time management with a simple, efficient platform. Stay organized with smart reminders and seamless event control. </p>
        <DialogDemo className="w-[300px] mt-4"/>
    </div>
  )
}

export default AppInfo
