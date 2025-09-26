import React from 'react'
import BlogImg from '../Components/BlogImg'
import BlogSection from '../Components/BlogSection'
import "../css/Blog.css";
import Footer from '../Components/Footer';


const Blog = () => {
  return (
    <div>
    <BlogImg/>
    <div className='Blog-Contanior'></div>
    <BlogSection/>
    <Footer/>
    </div>
  )
}

export default Blog