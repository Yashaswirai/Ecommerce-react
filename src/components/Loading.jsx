import React from 'react'
import { RingLoader } from 'react-spinners'
function Loading() {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <RingLoader color='#36d7b7' />
    </div>
  )
}

export default Loading
