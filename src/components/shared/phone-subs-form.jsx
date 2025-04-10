import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const PhoneSubsForm = () => {
  return (
    <div className='bg-secondary mt-16 rounded-[20px] pt-[48px] pb-[52px] flex flex-col items-center'>
      <p className='font-normal text-center text-[29.38px] leading-[44.8px]'>
        Subscribe to our SMS <br /> newsletter and get 15% off
      </p>
      <p className='font-normal text-[14.63px] leading-[20.8px] text-center mt-4'>
        Be the first to know about the latest in tech trends, exclusive offers, and exciting product launches by subscribing with your phone number.
      </p>
      <form className='flex w-full justify-center gap-3 mt-6'>
        <Input className='max-w-[492px] h-[58px] bg-white' placeholder='Your phone number' />
        <Button className='h-[58px] w-[136px]'>Subscribe</Button>
      </form>
    </div>
  )
}

export default PhoneSubsForm