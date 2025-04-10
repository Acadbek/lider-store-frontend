import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/Navbar'
import PhoneSubsForm from '@/components/shared/phone-subs-form'
import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='container mx-auto'>
      <Navbar />
      <Outlet />
      <PhoneSubsForm />
      <Footer />
    </div>
  )
}

export default RootLayout