import React from 'react'
import { Link } from 'react-router-dom'
function Card({ product }) {
  return (
    <div className='w-1/5 h-[37%] px-5 bg-white rounded-lg shadow-md overflow-hidden'>
      <div className='w-full h-48'>
        <img className='w-full h-full object-contain hover:scale-105 transition-all duration-300' src={product.image} alt="" />
      </div>
      <Link to={`details/${product.id}`} className='leading-none tracking-tighter font-base text-lg hover:text-blue-500'>
        {(() => {
          const words = product.title.split(' ');
          return words.length > 5 ? words.slice(0, 5).join(' ') + '...' : words.join(' ');
        })()}
      </Link>
    </div>
  )
}

export default Card
