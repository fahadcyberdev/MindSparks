import React from 'react';
import { assets } from '../../assets/assets';

const CommentTableItem = ({ comment }) => {
  const { blog, createdAt, _id, name, content, isApproved } = comment;
  const blogDate = new Date(createdAt).toLocaleString();

  return (
    <tr className="border-y border-gray-300 text-sm sm:text-base">

      {/* === Blog, Name & Comment Column === */}
      <td className="px-4 py-3 sm:px-6 sm:py-4 w-full max-w-[350px]">
        <div className="space-y-1">
          <p><b className="text-gray-600">Blog</b>: {blog?.title}</p>
          <p><b className="text-gray-600">Name</b>: {name}</p>
          <p><b className="text-gray-600">Comment</b>: {content}</p>

          {/* Responsive Date Display for Small Screens */}
          <p className="text-gray-400 mt-2 sm:hidden">
            <b>Date</b>: {blogDate}
          </p>
        </div>
      </td>

      {/* === Date Column (hidden on small screens) === */}
      <td className="px-4 py-3 sm:px-6 sm:py-4 text-gray-400 hidden sm:table-cell">
        {blogDate}
      </td>

      {/* === Action Column === */}
      <td className="px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex flex-wrap items-center gap-3">

          {/* Approval or Button */}
          {!isApproved ? (
            <img
              src={assets.tick_icon}
              alt="Approve"
              title="Approve"
              className="w-5 cursor-pointer hover:scale-110 transition-all"
            />
          ) : (
            <p className="text-xs border border-green-600 bg-green-100 text-green-700 rounded-full px-3 py-1">
              Approved
            </p>
          )}

          {/* Delete Icon */}
          <img
            src={assets.bin_icon}
            alt="Delete"
            title="Delete"
            className="w-5 cursor-pointer hover:scale-110 transition-all"
          />
        </div>
      </td>
    </tr>
  );
};

export default CommentTableItem;
