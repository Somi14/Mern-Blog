import React, { useContext, useState } from 'react'
import { VscAdd } from "react-icons/vsc";
import { Context } from '../context/Context';
import axios from 'axios';
const Write = () => {
const [title, setTitle]=useState("");
const [desc, setDesc]=useState("");
const [file, setFile]=useState(null);
const {user}=useContext(Context)
const handleSubmit=async (e)=>{
    e.preventDefault();
    const newPost={
      username:user.username,
      title,
      desc
    }
    if(file){
      const data=new FormData();
      const filename=Date.now()+file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo=filename;
      console.log()

      try{
       await axios.post("/upload", data);
      }catch(err){
        console.error("Error uploading file:", err);
       }
    }
    try{
    const res= await axios.post("/posts", newPost);
    window.location.replace("/post/"+res.data._id);
    }catch(err){
      console.error("Error creating post:", err);
     }

  }
  return (
    <div className='pt-14'>
      {
        file &&(
          <img className=' h-80 rounded-[10px] object-cover mb-8' style={{width:"70vw", marginLeft:"210px"}}
          src={URL.createObjectURL(file)} alt='image'/>
          
        )
      }
        
      <form className='relative' onSubmit={handleSubmit}>
         <div style={{marginLeft:"150px"}} className='flex items-center'>
            <label htmlFor='fileInput' className='mr-4'>
            <VscAdd className='w-10 h-10 rounded-[50%] border-2 border-black flex items-center justify-center cursor-pointer'/>
            </label>
            <input type='file' id='fileInput' style={{display:"none"}}
             onChange={(e)=>setFile(e.target.files[0])}/>

            <input className=' h-12 border-none  text-4xl' style={{width:"70vw"}}
             type='text'
             placeholder='title'
              autoFocus
              onChange={(e)=>setTitle(e.target.value)}/>
         </div>

         <div style={{marginLeft:"150px"}} className='flex items-center'>
            <textarea className='text-xl outline-none p-5 mt-5 ' style={{width:"70vw", height:"100vh"}}
            placeholder="Tell your story...."
             type="text"
             onChange={(e)=>setDesc(e.target.value)}

             ></textarea>
         </div>

         <button type="sumbit" className="px-8 py-3 font-semibold rounded bg-gray-800 text-gray-100 cursor-pointer absolute top-0 right-20">Publish</button>
      </form>
    </div>
  )
}

export default Write
