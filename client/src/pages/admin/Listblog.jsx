import React, { useEffect, useState } from 'react';
import { blog_data } from '../../assets/assets';
import BlogTableItem from '../../components/admin/BlogTableItem';

const Listblog = () => {
  // Assume blog_data is an array; adjust state to match
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      // Simulate API fetch (replace with actual API call later)
      setBlogs(blog_data); // blog_data is an array
      setLoading(false);
    } catch (err) {
      setError('Failed to load blogs');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50">
        <h1>All blogs</h1>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50">
        <h1>All blogs</h1>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50">
      <h1>All blogs</h1>
      <div className="relative h-4/5 max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-gray-600 text-left uppercase">
            <tr>
              <th scope="col" className="px-2 py-4 xl:px-6">#</th>
              <th scope="col" className="px-2 py-4">Blog Title</th>
              <th scope="col" className="px-2 py-4 max-sm:hidden">Date</th>
              <th scope="col" className="px-2 py-4 max-sm:hidden">Status</th>
              <th scope="col" className="px-2 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.length > 0 ? (
              blogs.map((blog, index) => (
                <BlogTableItem
                  key={blog._id}
                  blog={blog}
                  fetchBlogs={fetchBlogs}
                  index={index + 1}
                />
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-2 py-4 text-center">
                  No blogs found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Listblog;