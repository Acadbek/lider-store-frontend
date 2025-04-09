import Navbar from '@/components/shared/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='container mx-auto'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default RootLayout