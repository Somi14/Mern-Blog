import React, { useContext, useEffect, useState } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { IoMdPhotos } from "react-icons/io";
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import {Link} from "react-router-dom";
import { Context } from '../context/Context';

const SinglePost = () => {
	const location=useLocation()
	const path=(location.pathname.split("/")[2]);
	 const[post, setPost]=useState({});
	 const{user}=useContext(Context);
	 const PF ="http://localhost:5000/images/"
     const[title, setTitle]=useState("");
     const[desc, setDesc]=useState("");
     const[updatemode, setUpdateMode]=useState(false);


	  useEffect(()=>{
		const getPost=async()=>{
			const res=await axios.get("/posts/"+ path);
			setPost(res.data);
			setTitle(res.data.title)
			setDesc(res.data.desc)
		};
		getPost()
	  }, [path]);
    
	  //this is the entire function for delete
	  const handleDelete=async()=>{
		try{
		 await axios.delete(`/posts/${post._id}`, {data:{username:user.username}});
		 window.location.replace("/");
		} catch(err){

		}
	  }

	  const handleUpdate=async()=>{
        try{
			await axios.put(`/posts/${post._id}`, {username:user.username, title, desc});
			setUpdateMode(false)
		   } catch(err){
   
		   }
	  }
   
	  //To handle postPhoto change
	//   const handleSubmit=async (e)=>{
	// 	e.preventDefault();
	// 	const newPost={
	// 	  username:user.username,
	// 	  title,
	// 	  desc
	// 	}
	// 	if(file){
	// 	  const data=new FormData();
	// 	  const filename=Date.now()+file.name;
	// 	  data.append("name", filename);
	// 	  data.append("file", file);
	// 	  newPost.photo=filename;
	// 	  console.log(file)
	
	// 	  try{
	// 	   await axios.post("/upload", data);
	// 	  }catch(err){
	// 		console.error("Error uploading file:", err);
	// 	   }
	// 	}
	// 	try{
	// 	const res= await axios.post("/posts", newPost);
	// 	window.location.replace("/post/"+res.data._id);
	// 	}catch(err){
	// 	  console.error("Error creating post:", err);
	// 	 }
	
	//   }
	

  return (
    <div className='bg-gray-100 mt-2'>
		
        <div className='flex justify-center items-center '>
			{
				post.photo && (
					<div>
					<img src={PF + post.photo}alt='' className='mt-4 w-full md:max-w-[900px] md:h-[500px]'/>
					<label htmlFor='fileInput'>
					<IoMdPhotos className='w-5 h-6 cursor-pointer ' />
					</label>
                    <input type='file' id='fileInput' style={{display:"none"}}/>
					</div>
		
				)
			}
         </div>
		 
         

         <div className="max-w-4xl px-10 py-5 mx-auto space-y-12 ">
	<article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
		<div className="space-y-6">
			{
				updatemode? <input className="text-4xl font-bold md:tracking-tight md:text-5xl border-b border-gray-500 focus:border-none focus:outline-none w-full sm:w-auto "
				autoFocus
				type='text'
			     value={title}
				 onChange={(e)=>setTitle(e.target.value)}/> :(
			
			<h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
			)}
			<div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
				<div className="flex items-center md:space-x-2">
					<img src="https://source.unsplash.com/75x75/?portrait" alt="" className="w-8 h-8 border rounded-full dark:bg-gray-500 dark:border-gray-300" />
					<p className="text-sm"><Link to={`/?user=${post.username}`}>{post.username}</Link>    • {new Date(post.createdAt).toDateString()}</p>
				</div>
				{post.username===user?.username && !updatemode && (
                <div className='flex items-center'>
				<p className="flex-shrink-0 mt-3 text-sm md:mt-0 mr-2">4 min read</p>
                <MdDeleteOutline className=' w-10 h-6 cursor-pointer text-red-500' onClick={handleDelete}/>
                <AiOutlineEdit className=' w-5 h-6 cursor-pointer' onClick={()=>setUpdateMode(true)} />
                 </div>
				 )}
			</div>
		
		</div>
		{
			updatemode ?(<textarea className='dark:text-gray-800 text-justify  focus:outline-none w-full h-full md:h-[160px] md:w-[860px] sm:h-28'
			 value={desc} 
			 onChange={(e)=>setDesc(e.target.value)}
			 />)
			 :
			 (
                <div className="dark:text-gray-800 text-justify w-full sm:w-auto">
			   <p>{desc}</p>
		    </div>
			)
		}

		{
			updatemode && 

			<button className='rounded-md text-gray-100 px-5 py-2.5 text-sm font-medium
			 bg-teal-600' 
			 onClick={handleUpdate}
			 >
			Update</button>
		}
		
	</article>
	<div>
		<div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
			<a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#MambaUI</a>
			<a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#TailwindCSS</a>
			<a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#Angular</a>
		</div>
		
	</div>
</div>
    </div>
  )
}

export default SinglePost
