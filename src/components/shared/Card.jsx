import React from 'react'
import { Badge } from '../ui/badge'
import { Link } from 'react-router-dom'

const Card = (
  {
    img = 'https://framerusercontent.com/images/w7IbfPMQ1WzfzPX81a0tLqv0U4.png?scale-down-to=1024',
    title = 'Headphones x-28m',
    price = 'USD 149.99',
    id = 1,
    type
  }
) => {
  return (
    <Link to={`/shop/${id}`}>
      <div className='relative hover:scale-[102%] cursor-pointer transition-all' role="region" aria-labelledby="product1">
        {
          type && (
            <Badge variant="outline" className="absolute opacity-60 top-4 left-4 px-8 text-base">{type}</Badge>
          )
        }
        <img
          className='w-full rounded-lg object-cover'
          loading='lazy'
          src={img}
          alt="Headphones x-28m in black color"
          id="product1"
        />
        <div className='flex justify-between px-2 mt-3'>
          <h2 className='text-[20px] leading-7 tracking-wide'>{title}</h2>
          <p className='text-[20px] leading-7 tracking-wide opacity-60'>{price}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card