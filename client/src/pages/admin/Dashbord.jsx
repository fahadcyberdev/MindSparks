import React, { useEffect, useState } from 'react'
import { assets, dashboard_data } from '../../assets/assets'
import BlogTableItem from '../../components/admin/BlogTableItem'

const Dashbord = () => {
  // Correct useState syntax and initialization
  const [dashbordData, setDashbordData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0, 
    recentBlogs: []
  })

  const fetchDashbord = async () => {
    setDashbordData(dashboard_data)
  }

  useEffect(()=>{
    fetchDashbord()
  },[])

  return (
    <div className='flex-1 p-4 md:p-10 bg-blue-50/50'>
      <div className='flex flex-wrap gap-4'>
        <img src={assets.dashboard_icon_1} alt="das1" />
        <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
          {/* Display the number of blogs */}
          <p className='text-xl font-semibold text-gray-600'>{dashbordData.blogs}</p>
          <p className='text-gray-400 font-light'>Blogs</p>
        </div>

        <div className='flex flex-wrap gap-4'>
          <img src={assets.dashboard_icon_2} alt="das2" />
          <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
            {/* Display the number of comments */}
            <p className='text-xl font-semibold text-gray-600'>{dashbordData.comments}</p>
            <p className='text-gray-400 font-light'>comments</p>
          </div>
        </div>

        <div className='flex flex-wrap gap-4'>
          <img src={assets.dashboard_icon_3} alt="das3" />
          <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
            {/* Display the number of drafts */}
            <p className='text-xl font-semibold text-gray-600'>{dashbordData.drafts}</p>
            <p className='text-gray-400 font-light'>Drafts</p>
          </div>
        </div>
      </div>

      <div>
        <div className='flex items-center gap-3 m-4 mt-6 text-gray-600'>
          <img src={assets.dashboard_icon_4} alt="dsi4" />
          <p>letest blogs</p>
        </div>

        <div className='relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white '>
          <table className='w-full text-sm text-gray-500'>
            <thead className=' text-xs text-gray-600 text-left uppercase'>
              <tr>
                <th scope='col' className='px-2 py-4 xl:px-6'>#</th>
                <th scope='col' className='px-2 py-4'>Blog Title</th>
                <th scope='col' className='px-2 py-4 max-sm:hidden'>Date </th>
                <th scope='col' className='px-2 py-4 max-sm:hidden'>Status</th>
                <th scope='col' className='px-2 py-4'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dashbordData.recentBlogs.map((blog, index)=>{
                return <BlogTableItem key={blog._id} blog={blog}
                   fetchBlogs={fetchDashbord} index={index + 1 }/>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashbord