import React, { useEffect, useRef, useState } from 'react'
import { assets, blogCategories } from '../../assets/assets'
import Quill from 'quill'

const AddBlog = () => {
  const editorRef = useRef(null)
  const quillRef = useRef(null)

  const [image, setImage] = useState(false)
  const [title, setTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const [category, setCategory] = useState('startup')
  const [isPublished, setIsPublished] = useState(false)

  const generateContent = async () => {
    // Generate blog content with AI
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    // Form submission logic
  }

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: 'snow' })
    }
  }, [])

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex-1   bg-blue-50/50 text-gray-600 h-full overflow-scroll"
    >
      <div className ="bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded ">
        {/* Upload */}
        <p className="text-sm text-gray-700 mb-1">Upload thumbnail</p>
        <label htmlFor="image">
          <div className="w-28 h-20 bg-gray-100 border border-dashed border-gray-300 rounded flex flex-col justify-center items-center cursor-pointer text-gray-500 text-sm hover:bg-gray-200 transition">
            <img
              src={!image ? assets.upload_area : URL.createObjectURL(image)}
              alt="upload"
              className="h-full w-full object-cover rounded"
            />
          </div>
          <input
            onChange={(e) => setImage(e.target.files && e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </label>

        {/* Blog Title */}
        <p className="mt-5 mb-1 text-sm text-gray-700">Blog title</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full p-2 border border-gray-300 rounded text-sm outline-none focus:ring-1 focus:ring-blue-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Sub Title */}
        <p className="mt-4 mb-1 text-sm text-gray-700">Sub title</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full p-2 border border-gray-300 rounded text-sm outline-none focus:ring-1 focus:ring-blue-400"
          value={subTitle}
          onChange={(e) => setSubTitle(e.target.value)}
        />

        {/* Blog Description */}
        <p className="mt-4 mb-1 text-sm text-gray-700">Blog description</p>
        <div className="relative border border-gray-300 rounded">
          <div
            ref={editorRef}
            className="min-h-[140px] p-2 rounded-t text-sm"
          ></div>
          <button
            type="button"
            onClick={generateContent}
            className="absolute bottom-2 right-2 bg-gray-800 text-white text-xs px-3 py-1 rounded hover:bg-gray-700"
          >
            Generate with AI
          </button>
        </div>
        <p className="mt-4 mb-1 text-sm text-gray-700">Blog category</p>
          <select onChange={e => setCategory(e.target.value)} name="category" className='mt-2 px-3 border text-gray-500 border-gray-300 outline-none rounded ' >
            <option value="">Select category</option>
            {blogCategories.map((item, index)=>{
              return <option key={index} value={item}>{item}</option>
            })}
          </select>

          <div className='fkex gap-2 mt-4'>
            <p>Published Now</p>
            <input type="checkbox" checked={isPublished} className='scale-125 cursor-pointer ' onChange={e => setIsPublished(e.target.checked)} />
          </div>

          <button className='mt-8 w-40 h-10 bg-primary text-white rounded cursor-pointer ' type='submit'>AddBlog</button>

      </div>
    </form>
  )
}

export default AddBlog
