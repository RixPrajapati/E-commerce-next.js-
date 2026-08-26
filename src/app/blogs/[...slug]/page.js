import React from 'react'

const BlogDetailsPage = async ({params}) => {
    const {slug}= await params;
    console.log(slug)
  return (
    <div>BlogDetailsPage and it api : {slug}</div>
  )
}

export default BlogDetailsPage