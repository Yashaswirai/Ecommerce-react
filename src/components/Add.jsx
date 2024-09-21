import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { productContext } from '../utils/Context'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
function Add() {
  const { register, handleSubmit, reset} = useForm()
  const {products,setProducts} = useContext(productContext)
  const navigate = useNavigate();
  const onSubmit = (data) => {
    if(data.title.trim().length < 5 || data.description.trim().length < 5 || data.category.trim().length < 5 || data.image.trim().length < 5)
      return alert("Atleast 5 letters should present in the form of every field except price")
    setProducts([...products,data])
    localStorage.setItem('products', JSON.stringify([...products,data]));
    toast.success("Product added successfully")
    navigate("/")
    reset()
  }
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4 w-1/2">Add New Product</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-1/2"
      >
        <input
          {...register("image")}
          className="p-2 rounded-md border-2 border-zinc-500"
          type="url"
          placeholder="Image URL"
        />
        <input
          {...register("id")}
          className="p-2 rounded-md border-2 border-zinc-500 hidden"
          value={nanoid()}
        />
        <input
          {...register("title")}
          className="p-2 rounded-md border-2 border-zinc-500"
          type="text"
          placeholder="Title"
        />

        <div className="flex gap-4">
          <input
            {...register("price")}
            className="p-2 rounded-md border-2 border-zinc-500"
            type="number"
            placeholder="Price"
          />
          <input
            {...register("category")}
            className="p-2 rounded-md border-2 border-zinc-500"
            type="text"
            placeholder="Category"
          />
        </div>
        <textarea 
          {...register("description")}
          className="p-2 rounded-md border-2 border-zinc-500"
          type="text"
          placeholder="Description"
          />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default Add
