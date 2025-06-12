import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const AddBlog = () => {

  const [image , setImage ] = useState(false);
  const [title , setTitle ] = useState('');
  const [subTitle , setSubTitle ] = useState('');
  const [category , setCategory ] = useState('startup');
  const [isPublished , setIsPublished ] = useState(false);

  const generateContent = async () => {

  }

  const onSubmitHandler = async (e) =>{
    e.preventDefault();
    // handle form submission here
  }

  return (
    <>
      <form onSubmit={onSubmitHandler} className='flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll'>
        <div className='bg-white w-full max-w-3xl p-4 md:p-10 shadow rounded '>
          <p>upload thumbnail</p>
          <label htmlFor="image">
            <img
              src={!image ? assets.upload_area : URL.createObjectURL(image)}
              alt="aria-upload"
              className='mt-2 h-16 rounded cursor-pointer '
            />
            <input
              onChange={(e)=> setImage(e.target.files && e.target.files[0])}
              type="file"
              id='image'
              hidden
              required
            />
          </label>
          <p className="mt-4"> Blog title </p>
          <input
            type="text"
            placeholder='Type here'
            required
            className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none'
            onChange={e => setTitle(e.target.value)}
            value={title}
          />

          <p className="mt-4"> Sub title </p>
          <input
            type="text"
            placeholder='Type here'
            required
            className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none'
            onChange={e => setSubTitle(e.target.value)}
            value={subTitle}
          />

          <p className="mt-4"> Blog Discription </p>
          <div className='max-w-lg h-74 p-16 sm:pb-10 pt-2 relative'>
            <button type='button' className='absolute bottom-1 right-2 ml-2 text-xs text-white bg-black/70 px-3 py-1.5 rounded hover:underline cursor-pointer' onClick={generateContent}> Generate with AI</button>
            

          </div>
        </div>
      </form>
    </>
  )
}

export default AddBlog