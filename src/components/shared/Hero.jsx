import React from 'react'
import { Button } from '../ui/button'
import img from '../../assets/images/webp/img.webp'
import img2 from '../../assets/images/webp/img2.webp'
import img3 from '../../assets/images/webp/tv.webp'
import { Badge } from '../ui/badge'

const Hero = () => {
  const preloadFonts = () => (
    <link
      rel="preload"
      href="../../assets/fonts/Satoshi-Regular.woff2"
      as="font"
      type="font/woff2"
      crossorigin="anonymous"
    />
  );

  return (
    <section aria-labelledby="hero-heading">
      {preloadFonts()}
      <div
        className="flex items-end justify-between mt-14"
      >
        <div>
          <h1
            id="hero-heading"
            className="font-medium text-[60px] leading-[80px]"
          >
            Trusted products for <br /> your modern lifestyle
          </h1>
          <p className="font-normal text-[18.28px] leading-7 tracking-wide mt-4 opacity-60">
            Explore a wide selection of high-quality products <br /> designed to enhance
            your everyday life with comfort, style, and reliability.
          </p>
        </div>
        <Button
          variant="outline"
          className="w-[227px] tracking-wide h-[60px] font-normal text-[17px] leading-[23.4px]"
          aria-label="Browse all products in marketplace"
        >
          Browse all products
        </Button>
      </div>
      <div className='grid grid-cols-3 gap-6 mt-16'>
        <div className='relative hover:scale-[102%] cursor-pointer transition-all' role="region" aria-labelledby="product1">
          <Badge variant="outline" className="absolute opacity-60 top-4 left-4 px-8 text-base">New</Badge>
          <img
            className='w-full rounded-lg object-cover'
            loading='lazy'
            src={img}
            alt="Headphones x-28m in black color"
            id="product1"
          />
          <div className='flex justify-between px-2 mt-3'>
            <h2 className='text-[20px] leading-7 tracking-wide'>Headphones x-28m</h2>
            <p className='text-[20px] leading-7 tracking-wide opacity-60'>USD 149.99</p>
          </div>
        </div>
        <div className='relative hover:scale-[102%] cursor-pointer transition-all' role="region" aria-labelledby="product2">
          <Badge variant="outline" className="absolute opacity-60 top-4 left-4 px-8 text-base">New</Badge>
          <img
            className='w-full rounded-lg object-cover'
            loading='lazy'
            src={img2}
            alt="eWatch SF 4 smart watch"
            id="product2"
          />
          <div className='flex justify-between px-2 mt-3'>
            <h2 className='text-[20px] leading-7 tracking-wide'>eWatch SF 4</h2>
            <p className='text-[20px] leading-7 tracking-wide opacity-60'>USD 149.99</p>
          </div>
        </div>
        <div className='relative hover:scale-[102%] cursor-pointer transition-all' role="region" aria-labelledby="product3">
          <Badge variant="outline" className="absolute opacity-60 top-4 left-4 px-8 text-base">New</Badge>
          <img
            className='w-full rounded-lg object-cover'
            loading='lazy'
            src={img3}
            alt="eDisplay XR display screen"
            id="product3"
          />
          <div className='flex justify-between px-2 mt-3'>
            <h2 className='text-[20px] leading-7 tracking-wide'>eDisplay XR</h2>
            <p className='text-[20px] leading-7 tracking-wide opacity-60'>USD 149.99</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
