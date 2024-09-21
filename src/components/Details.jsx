import React, { useContext } from 'react'
import { json, Link, useNavigate, useParams } from 'react-router-dom'
import { productContext } from '../utils/Context'
import Loading from './Loading'
import { toast } from 'react-toastify'
function Details() {
  const { id } = useParams()
  const { products,setProducts } = useContext(productContext)
  const product = products.find((product) => ((product.id).toString()) === id)
  const navigate = useNavigate();
  const deleteHandler = (id) =>{
    const filtered = products.filter((product) => (product.id).toString() !== id)
    setProducts(filtered);
    localStorage.setItem('products', JSON.stringify(filtered));
    toast.error("Product deleted")
    navigate("/");
    
  }
  return product ? (
    <div className='w-full h-full flex justify-center items-center relative'>
      <div className='w-8/12 h-fit flex rounded-lg overflow-hidden border-2 p-4 border-red-500 shadow-2xl'>
        <div className='w-full h-80 '>
          <img className='w-full h-full object-contain' src={product.image} alt="" />
        </div>
        <div className='w-full h-full flex flex-col justify-center items-center'>
          <h1 className='text-2xl font-bold mb-5'>{product.title}</h1>
          <h2 className='text-sm text-gray-500 bg-red-100 rounded-full px-2 py-1 mb-2'>{product.category}</h2>
          <p className='text-sm mb-2'>{product.description}</p>
          <p className='text-sm mb-2 font-bold text-white bg-slate-500 rounded-full px-2 py-1'>${product.price}</p>
          <div className='flex gap-8'>
            <Link to={`/edit/${product.id}`} className='text-sm mt-2 font-bold text-white bg-blue-500 rounded-full px-5 py-2'>Edit</Link>
            <button onClick={()=>deleteHandler(product.id)} className='text-sm mt-2 font-bold text-white bg-red-500 rounded-full px-5 py-2'>Delete</button>
          </div>
        </div>
      </div>
    </div>
  ) : <Loading />
}

export default Details
