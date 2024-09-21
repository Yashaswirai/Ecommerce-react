import React, { useContext, useState } from 'react'
import { productContext } from '../utils/Context'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

function Edit() {
  const { id } = useParams()
  const {products,setProducts} = useContext(productContext)   
  const product = products.find((product) => ((product.id).toString()) === id)
  const [title, setTitle] = useState(product.title)
  const [description, setDescription] = useState(product.description)
  const [image, setImage] = useState(product.image)
  const [price, setPrice] = useState(product.price)
  const [category, setCategory] = useState(product.category)
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(title.trim().length < 5 || description.trim().length < 5 || category.trim().length < 5 || image.trim().length < 5)
      return alert("Atleast 5 letters should present in the form of every field except price")
    const filter = products.filter(product => ((product.id).toString()) !== id)
    const data = {
      id,
      title,
      description,
      image,
      price,
      category,
    }
    setProducts([...filter, data])
    localStorage.setItem('products', JSON.stringify([...filter,data]));
    toast.success("Product updated successfully")
  };
  
  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative">
      <button onClick={()=>navigate(-1)} className='px-5 py-2 rounded-lg bg-red-600 text-white absolute right-3 top-3'>Go Back</button>
      <h1 className="text-2xl font-bold mb-4 w-1/2">Edit Product Details</h1>
      <form onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-1/2"
      >
        <input
          className="p-2 rounded-md border-2 border-zinc-500"
          type="url"
          placeholder="Image URL"
          value={image}
          onChange={(e)=>setImage(e.target.value)}
        />
        <input
          className="p-2 rounded-md border-2 border-zinc-500"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <div className="flex gap-4">
          <input
            className="p-2 rounded-md border-2 border-zinc-500"
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
          />
          <input
            className="p-2 rounded-md border-2 border-zinc-500"
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
          />
        </div>
        <textarea
          className="p-2 rounded-md border-2 border-zinc-500"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
          />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Update Product
        </button>
      </form>
    </div>
  )
}

export default Edit
