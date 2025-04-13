import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const ContactPage = () => {
  return (
    <>
      <h1 className='font-medium text-6xl leading-[46px] mt-[80px]'>Contact us</h1>
      <h2 className='font-normal text-[18.59px] leading-7 my-8'>We're here to assist you with any inquiries, feedback, or assistance you may need. <br /> Whether you have questions about products, orders, or general inquiries, our <br /> dedicated customer support team is ready to help.</h2>
      <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-1 flex gap-4 flex-col'>
          <div className='h-[325px] flex flex-col justify-between bg-secondary rounded-[20px] p-[24px]'>
            <div>
              <h3 className='text-[22.5px] leading-[33.6px]'>Phone number</h3>
              <h2 className='font-normal text-lg leading-[20.8px] mt-4'>+ 123 456 789</h2>
            </div>
            <p className='font-normal text-lg leading-[24.8px] mt-4 opacity-60'>Call our team directly. We will provide information, answer technical questions, or schedule an appointment.</p>
          </div>
          <div className='h-[325px] flex flex-col justify-between bg-secondary rounded-[20px] p-[24px]'>
            <div>
              <h3 className='text-[22.5px] leading-[33.6px]'>Email</h3>
              <h2 className='font-normal text-lg leading-[20.8px] mt-4'>contact@lider.com</h2>
            </div>
            <p className='font-normal text-lg leading-[24.8px] mt-4 opacity-60'>Use email to provide information about the project. We will respond as soon as possible, providing comprehensive support.</p>
          </div>
        </div>
        <div className='col-span-2 bg-secondary rounded-[20px] p-[24px]'>
          <h3 className='text-[22.5px] leading-[33.6px]'>Drop us a message</h3>
          <p className='font-normal opacity-60'>We're always here to assist you at Etec. Our customer support team is dedicated to addressing your inquiries.</p>
          <form className='mt-[24px]'>
            <div className='flex gap-4 items-center'>
              <Input
                type='text'
                required
                placeholder='Name' className='h-[60px] bg-white pl-6' />
              <Input
                type='email'
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                placeholder='Email'
                className='h-[60px] bg-white pl-6'
              />
            </div>
            <Textarea
              required
              maxLength={3000}
              placeholder='Message'
              className='h-[376px] resize-none mt-[18px] bg-white p-6'
            />
            <Button className='w-full tracking-wide h-[60px] font-normal text-[17px] leading-[23.4px] mt-[18px]'>Send message</Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactPage