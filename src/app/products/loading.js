import Spinner from '@/components/Spinner'
import React from 'react'

const loading = () => {
  return (
    <div className='flex justify-center py-16'>
        <Spinner/>
    </div>
  )
}

export default loading