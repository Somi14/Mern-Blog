import React from 'react'
import {Link} from "react-router-dom" 

const Post = ({post}) => {
	const PF ="http://localhost:5000/images/"
  return (
		     	<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				
				{post.photo && (
				<img role="presentation" 
				className="object-cover w-full rounded h-44 dark:bg-gray-500" 
				src={PF + post.photo} 
				 />) }

				<div className="p-6 space-y-2">
					
					<Link to={`/post/${post._id}`}> 
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{post.title}</h3>
					</Link>
					<span className="text-xs dark:text-gray-600">{new Date(post.createdAt).toDateString()}</span>
					{
						post.categories.map((c)=>(

							<span className="text-xs dark:text-gray-600">{c.name}</span>
						))
					}
					
					<p>{post.desc}</p>
					
				</div>
			</a>
  )
}

export default Post
