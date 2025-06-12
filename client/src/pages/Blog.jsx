import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, blog_data, comments_data } from '../assets/assets'
import Navbar from '../components/Navbar'
import Moment from 'moment'
import Footer from '../components/Footer'
import Loader from '../components/Loader'

const Blog = () => {
  // Get the blog ID from the URL
  const { id } = useParams()

  // State for blog data and comments
  const [data, setData] = useState(null)
  const [comments, setComments] = useState([])

  // State for new comment form
  const [name, setName] = useState('')
  const [content, setContent] = useState('')

  // Fetch blog data by ID
  const fetchBlogData = async () => {
    const blog = blog_data.find(item => item._id === id)
    setData(blog)
  }

  // Fetch comments (could be filtered by blog ID in a real app)
  const fetchComments = async () => {
    setComments(comments_data)
  }

  // Handle new comment submission
  const addComment = async (e) => {
    e.preventDefault()
    if (!name.trim() || !content.trim()) return

    // Create new comment object
    const newComment = {
      name,
      content,
      createdAt: new Date().toISOString(),
    }

    // Add new comment to the top of the list
    setComments([newComment, ...comments])

    // Reset form fields
    setName('')
    setContent('')
  }

  // Fetch blog and comments on mount
  useEffect(() => {
    fetchBlogData()
    fetchComments()
  }, [])

  // Show loader while blog data is loading
  if (!data) return <Loader />

  return (
    <div className='relative'>
      {/* Decorative background */}
      <img src={assets.gradientBackground} alt="color-bg" className='absolute -top-50 -z-1 opacity-50' />

      {/* Navbar */}
      <Navbar />

      {/* Blog Header */}
      <div className='text-center mt-20 text-gray-600'>
        <p className='text-primary py-4 font-medium'>
          Published on {Moment(data.createdAt).format('MMMM Do YYYY')}
        </p>
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800'>
          {data.title}
        </h1>
        <h2 className='my-5 max-w-lg truncate mx-auto'>{data.subTitle}</h2>
        <p className='inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 font-medium text-primary'>
          {/* Author name could be dynamic */}
          Mical Browm
        </p>
      </div>

      {/* Blog Content */}
      <div className='mx-5 max-w-5xl md:mx-auto my-10 mt-6'>
        {/* Blog Image */}
        <img src={data.image} alt="image" className='rounded-3xl mb-5 w-full object-cover' />

        {/* Blog Description (rich text) */}
        <div
          className='rich-text max-w-3xl mx-auto'
          dangerouslySetInnerHTML={{ __html: data.description }}
        />

        {/* Comments Section */}
        <div className='mt-14 mb-10 max-w-3xl mx-auto'>
          <p className='font-semibold mb-4'>Comments ({comments.length})</p>
          <div className='flex flex-col gap-4'>
            {comments.map((item, index) => (
              <div
                key={index}
                className='relative bg-primary/2 border border-primary/5 max-w-xl p-4 rounded text-gray-600'
              >
                {/* Comment Header */}
                <div className='flex items-center gap-2 mb-2'>
                  <img src={assets.user_icon} alt="user_icon" className='w-6' />
                  <p className='font-medium'>{item.name}</p>
                </div>
                {/* Comment Content */}
                <p className='text-sm max-w-md ml-8'>{item.content || item.comment}</p>
                {/* Comment Timestamp */}
                <div className='absolute right-4 bottom-3 flex items-center gap-2 text-xs'>
                  {Moment(item.createdAt).fromNow()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Comment Section */}
        <div className='max-w-3xl mx-auto'>
          <p className='font-semibold mb-4'>Add a Comment</p>
          <form className='flex flex-col items-start gap-4 max-w-lg' onSubmit={addComment}>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder='Name'
              required
              className='w-full p-2 border border-gray-300 rounded outline-none'
            />
            <textarea
              required
              onChange={(e) => setContent(e.target.value)}
              value={content}
              className='w-full p-2 border border-gray-300 rounded outline-none h-48'
              placeholder='Comment'
            ></textarea>
            <button
              type='submit'
              className='bg-primary text-white rounded p-2 px-8 hover:scale-105 transition-all cursor-pointer'
            >
              Submit
            </button>
          </form>
        </div>

        {/* Social Share Section */}
        <div className='my-24 max-w-3xl mx-auto'>
          <p className='font-semibold my-4'>Share this article on social media</p>
          <div className='flex gap-4'>
            <img src={assets.facebook_icon} alt="fb" width={50} className="hover:scale-110 transition" />
            <img src={assets.twitter_icon} alt="x" width={50} className="hover:scale-110 transition" />
            <img src={assets.googleplus_icon} alt="google" width={50} className="hover:scale-110 transition" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Blog