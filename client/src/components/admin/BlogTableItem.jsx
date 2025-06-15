import React from 'react'
import { assets } from '../../assets/assets';

const BlogTableItem = ({ blog, index }) => {
  const { title, createdAt, isPublished } = blog;
  const BlogDate = new Date(createdAt);

  return (
    <tr className='border-y border-gray-300'>

      <th className='px-2 py-4'>{index}</th>
      <td className='px-2 py-4'>{title}</td>
      <td className='px-2 py-4 max-sm:hidden'>{BlogDate.toDateString()}</td>

      <td className='px-2 py-4 max-sm:hidden'>
        <p className={isPublished ? "text-green-500" : "text-orange-700"}>
          {isPublished ? 'Published' : 'Unpublished'}
        </p>
      </td>

      <td className='px-2 py-4 flex text-xs gap-3'>
        <button className='border px-2 py-0.5 mt-1 rounded hover:scale-110 transition-all cursor-pointer'>
          {isPublished ? 'Unpublish' : 'Publish'}
        </button>
        <img
          src={assets.cross_icon}
          alt="cross"
          className='w-8 hover:scale-110 transition-all cursor-pointer'
        />
      </td>

    </tr>
  );
}

export default BlogTableItem;
