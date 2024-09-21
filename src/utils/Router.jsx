import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import Details from '../components/Details'
import Add from '../components/Add'
import Edit from '../components/Edit'
function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/details/:id' element={<Details />} />
      <Route path='/add' element={<Add />} />
      <Route path='/edit/:id' element={<Edit />} />
    </Routes>
  )
}

export default Router
