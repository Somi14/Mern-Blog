import React, { useEffect, useState } from 'react'
import Post from '../component/Post'
import Hero from '../component/Hero'
import axios from "axios";
import Posts from '../component/Posts';
import { useLocation } from 'react-router-dom';
const Home = () => {
  const [posts, setPosts]=useState([]);
  const {search}=useLocation()
  
  useEffect(()=>{
  const fetchPost=async()=>{
    const res=await axios.get("/posts"+search)
    setPosts(res.data)
  }
   fetchPost();
  },[search])

  return (   
      <div className='container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12'>
      <Hero/>
      <Posts posts={posts}/>
      </div>
      
  )
}

export default Home
