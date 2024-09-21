import React, { useContext } from 'react'
import { productContext } from '../utils/Context'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Nav() {
  const { products } = useContext(productContext)
  let categories = [...new Set(products.map(product => product.category))]
  const color = () => {
    return 'rgba(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + '0.4)';
  }
  
  const navigate = useNavigate();
  return (
    <div className="w-1/5 h-full bg-slate-500 p-4">
      <div className="flex items-center justify-center gap-4">        
        <button onClick={() => navigate('/add')} className="bg-blue-500 text-white p-2 rounded-md">Add New Product</button>
      </div>
      <hr className="my-4 bg-white" />
      <h1 className="text-white text-2xl font-semibold mb-4">Categories Filter</h1>
      {categories.map((category) => (
        <div key={category} className='flex gap-2 items-center'>
          <div className='w-3 h-3 rounded-full' style={{ backgroundColor: color() }}></div>
          <Link to={`?category=${category}`} className="text-white text-lg font-base">
            {category}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Nav
