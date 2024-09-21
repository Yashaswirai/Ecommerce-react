import React, { useState, useEffect, createContext } from 'react'
import axios from './Axios'
export const productContext = createContext()
function Context(props) {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products"))||[])
    // const getProducts = async () => {
    //     try {
    //         const res = await axios.get('/products')
    //         setProducts(res.data)

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // useEffect(() => {
    //     getProducts()
    // }, [])

  return (
    <productContext.Provider value={{ products, setProducts }}>
      {props.children}
    </productContext.Provider>
  )
}

export default Context
