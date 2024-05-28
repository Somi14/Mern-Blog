import React from 'react'
import Post from '../component/Post'


const Posts = ({posts}) => {
  return (
    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {
        posts.map((p)=>(
             <Post post={p}/>
        ))
      }
      
      </div>
  )
}

export default Posts
