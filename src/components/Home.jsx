import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import Nav from './Nav'
import Loading from './Loading'
import { productContext } from '../utils/Context'
import { useLocation } from 'react-router-dom'

function Home() {
  const { products } = useContext(productContext)
  const [filteredProducts, setFilteredProducts] = useState(null)
  const { search } = useLocation();
  const category = decodeURIComponent(search.split('=')[1])
  useEffect(() => {
    if (category && category !== 'undefined') {
      const filteredProducts = products.filter(product => product.category === category)
      setFilteredProducts(filteredProducts)
    } else {
      setFilteredProducts(products)
    }
  }, [category, products])
  return products.length === 0 ? <Loading /> : (
    <>
      <Nav />
      <div className='w-4/5 h-full bg-green-200 flex flex-wrap gap-10 p-8 overflow-y-auto'>
        {filteredProducts && filteredProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default Home
