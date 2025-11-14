import React from 'react'
import BlogImg from '../Components/BlogImg'
import BlogSection from '../Components/BlogSection'
import "../css/Blog.css";
import Footer from '../Components/Footer';
import BlogPage from '../Components/BlogPage';


const Blog = () => {
  return (
    <>
      <BlogImg/>
      <div className='Blog-Contanior'>
   <BlogSection/>
    {/* <Footer/>  */}
    </div>
    </>
  )
}

export default Blog