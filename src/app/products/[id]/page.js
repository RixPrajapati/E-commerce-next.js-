import React from 'react'

const ProductDetail = async ({params}) => {
    const {id}= await params
  return (
    <div>Product Detail by id : {id}</div>
  )
}

export default ProductDetail