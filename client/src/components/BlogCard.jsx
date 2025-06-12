import React from 'react'
import { useNavigate } from 'react-router-dom';

const BlogCard = ({blog}) => {

    const { title,discription,category,image, _id} = blog;
    const navigate = useNavigate()

  return (
    <div onClick={()=> navigate (`/blog/${_id}`)}>

        <img src={image} alt="blog_image_1" className='asspect-video' />
        <span className='ml-5 mt-4 px-3 py-1 inline-block bg-primary/20 rounded-full text-primary text-xs'>


           {category}
        </span>

     <div className='p-5'>
        <h5 className='mb-2 font-medium text-gray-900 '>{title}</h5>
       <p
  className='mb-3 text-xs text-gray-600'
  dangerouslySetInnerHTML={{
    "__html": discription ? discription.slice(0, 80) : ""
  }}
></p>
     </div>

    </div>
  )
}

export default BlogCard