import React from 'react'
import Home from './pages/Home'
import Blog from './pages/Blog'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/admin/Layout'
import Dashbord from './pages/admin/Dashbord'
import AddBlog from './pages/admin/AddBlog'
import Listblog from './pages/admin/Listblog'
import Comment from './pages/admin/Comment'
import Login from './components/admin/Login'
import 'quill/dist/quill.snow.css' 

const App = () => {
  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />

        {/* Admin Routes */}
        <Route path='/admin' element={ true ? <Layout /> : <Login/>}>
          <Route index element={<Dashbord />} />
          <Route path='addBlog' element={<AddBlog />} />
          <Route path='listBlog' element={<Listblog />} />
          {/* Use lowercase and singular/plural consistently */}
          <Route path='comment' element={<Comment />} />
          {/* Optionally, support /admin/comments as well */}
          {/* <Route path='comments' element={<Comment />} /> */}
        </Route>
      </Routes>
    </div>
  )
}

export default App