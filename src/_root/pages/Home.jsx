import Hero from '@/components/shared/Hero'
import React from 'react'
import img from '@/assets/images/webp/img3.webp'
import img2 from '@/assets/images/webp/img4.webp'
import img5 from '@/assets/images/webp/img5.webp'
import img3 from '@/assets/images/webp/img.webp'
import img6 from '@/assets/images/webp/img6.webp'
import img7 from '@/assets/images/webp/img7.webp'
import img8 from '@/assets/images/webp/img8.webp'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const Home = () => {
  return (
    <div>
      <Hero />
      <section className='mt-[120px]'>
        <h2 className='font-medium text-[37.19px] leading-[46px]'>Browse by categories</h2>
        <p className='font-normal text-[18.59px] leading-7 mt-4'>
          Explore our diverse range of categories tailored to <br />
          meet your specific needs and interests.
        </p>
        <div className='grid grid-cols-2 gap-4 mt-[40px]'>
          <div className='bg-secondary rounded-[20px]'>
            <div className='p-[40px]'>
              <h2 className='font-medium text-[22.5px] leading-[33.6px]'>All products</h2>
              <p className='font-normal text-[14.75px] leading-[20.8px] mt-4'>
                Discover endless possibilities with our All Products category.
                Shop now for everything you need in one convenient place.
              </p>
              <Button
                variant="outline"
                className="w-[227px] mt-6 tracking-wide h-[60px] border border-[#E6E6E6] shadow-none font-normal text-[17px] leading-[23.4px]"
                aria-label="Browse all products in marketplace"
              >
                Browse all products
              </Button>
            </div>
            <img src={img} height={300} className='w-full h-[300px] object-cover rounded-b-[20px]' loading='lazy' alt='img' />
          </div>
          <div className='rounded-[20px]'>
            <div className='flex bg-secondary rounded-[20px] items-start justify-between p-[40px] pb-0'>
              <div>
                <h2 className='font-medium text-[22.5px] leading-[33.6px]'>Displays</h2>
                <p className='font-normal text-[14.75px] leading-[20.8px] mt-4'>
                  Experience crystal-clear clarity and
                  vibrant visuals with our Displays.
                </p>
                <Button
                  variant="outline"
                  className="w-[227px] mt-6 tracking-wide h-[60px] border border-[#E6E6E6] shadow-none font-normal text-[17px] leading-[23.4px]"
                  aria-label="Browse all products in marketplace"
                >
                  Browse all products
                </Button>
              </div>
              <img width={311} height={300} src={img2} alt="" className='w-[311px] h-[300px] -mt-6 object-cover rounded-b-[20px]' loading='lazy' />
            </div>
            <div className='grid grid-cols-2 gap-4 mt-4'>
              <div className='relative p-4 w-full bg-secondary rounded-[20px]'>
                <img src={img3} alt="" className='w-full h-[250px] object-cover rounded-b-[20px]' loading='lazy' />
                <Button
                  variant="outline"
                  className="w-[227px] absolute left-1/2 transform -translate-x-1/2 bottom-4 mt-6 tracking-wide h-[60px] border border-[#E6E6E6] shadow-none font-normal text-[17px] leading-[23.4px]"
                  aria-label="Browse all products in marketplace"
                >
                  Browse all products
                </Button>
              </div>
              <div className='p-4 w-full relative bg-secondary rounded-[20px]'>
                <img src={img5} alt="Phone" className='w-full h-[250px] object-cover rounded-b-[20px]' loading='lazy' />
                <Button
                  variant="outline"
                  className="w-[227px] absolute left-1/2 transform -translate-x-1/2 bottom-4 mt-6 tracking-wide h-[60px] border border-[#E6E6E6] shadow-none font-normal text-[17px] leading-[23.4px]"
                  aria-label="Browse all products in marketplace"
                >
                  Browse all products
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='flex items-center justify-between mt-[120px]'>
          <h2 className='font-medium text-[37.19px] leading-[46px]'>Our articles and news</h2>
          <Button
            variant="outline"
            className="w-[227px] mt-6 tracking-wide h-[60px] shadow-none font-normal text-[17px] leading-[23.4px]"
            aria-label="Browse all products in marketplace"
          >
            Check all
          </Button>
        </div>
        <div className='grid grid-cols-3 gap-6 mt-16'>
          <div className='relative cursor-pointer transition-all' role="region" aria-labelledby="product1">
            <img
              className='w-full rounded-lg h-[400px] object-cover'
              loading='lazy'
              src={img6}
              height={400}
              alt="Headphones x-28m in black color"
              id="product1"
            />
            <h2 className='font-normal mt-4 text-[18.75px] leading-7'>
              The Future of Wearable Tech: Trends and
              Innovations to Watch
            </h2>
          </div>
          <div className='relative cursor-pointer transition-all' role="region" aria-labelledby="product2">
            <img
              className='w-full h-[400px] rounded-lg object-cover'
              loading='lazy'
              src={img7}
              height={400}
              alt="eWatch SF 4 smart watch"
              id="product2"
            />
            <h2 className='font-normal mt-4 text-[18.75px] leading-7'>
              The Rise of Smart Home Devices:
              Transforming the Way We Live
            </h2>
          </div>
          <div className='relative cursor-pointer transition-all' role="region" aria-labelledby="product3">
            <img
              className='w-full rounded-lg h-[400px] object-cover'
              loading='lazy'
              src={img8}
              height={400}
              alt="eDisplay XR display screen"
              id="product3"
            />
            <h2 className='font-normal mt-4 text-[18.75px] leading-7'>
              Gaming Gadgets: Revolutionizing
              Entertainment and Beyond
            </h2>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home