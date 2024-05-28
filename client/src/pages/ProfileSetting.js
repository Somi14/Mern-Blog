import React, { useContext, useTransition, useState } from 'react'
import { PiUserCirclePlus } from "react-icons/pi";
import { Context } from '../context/Context';
import axios from 'axios';
import { UNSAFE_RouteContext } from 'react-router-dom';
const ProfileSetting = () => {
  const {user, dispatch}=useContext(Context);
  const [file, setFile]=useState(null);
  const [username, setUsername]=useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [success, setSuccess]=useState(false);
  const PF ="http://localhost:5000/images/"


  const handleSubmit=async (e)=>{
    e.preventDefault();
    dispatch({type:"UPDATE_START"})
    const updatedUser={
      userId:user._id,
      username, 
      email,
      password
    }
    if(file){
      const data=new FormData();
      const filename=Date.now()+file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic=filename;
      console.log(file)

      try{
       await axios.post("/upload", data);
      }catch(err){
        console.error("Error uploading file:", err);
       }
    }
    try{
     const res=await axios.put(`/users/${user._id}`, updatedUser);
     setSuccess(true);
     dispatch({ type: "UPDATE_SUCCESS", payload: res.data });


    }catch(err){
      dispatch({ type: "UPDATE_FAILURE" });
     }

  }
  return (
   
    <div  className='flex'>
        <div className='flex-grow-9 p-5'>
           <div className='flex justify-between items-center '>
            <span className='text-3xl mt-5 text-teal-600'>Update Your Acount</span>
            <span className='text-sm cursor-pointer text-teal-600 mt-6'>Delete Your Acount</span>
           </div>

           <form className='flex flex-col' onSubmit={handleSubmit}>
            <label className="text-lg mt-5">Profile Picture</label>
            <div className='flex item-center mt-3 mb-0'>
              <img className='w-20 h-20 rounded-[20px] object-cover'
              src={file ? URL.createObjectURL(file) : PF+user.profilePic}/>

              <label htmlFor='fileInput'>
              <PiUserCirclePlus className='w-8 h-8 rounded-[50%] flex item-center justify-center ml-2 cursor-pointer mt-6' />
              </label>
              <input type='file'
               id='fileInput' 
              style={{display:"none"}}
              onChange={(e)=>setFile(e.target.files[0])}/>
            </div>

           <label className="text-lg mt-5">UserName</label>
           <input className="text-gray-500 mt-3 mb-3 h-8 border-b border-gray-300" type='text'
            placeholder={user.username}
            onChange={(e)=>setUsername(e.target.value)}/>

           <label className="text-lg mt-5">Email</label>
           <input className="text-gray-500 mt-3 mb-3 h-8 border-b border-gray-300" type='text' 
           placeholder={user.email}
           onChange={(e)=>setEmail(e.target.value)}/>

           <label className="text-lg mt-5">Password</label>
           <input className="text-gray-500 mt-3 mb-3 h-8 border-b border-gray-300"
             onChange={(e)=>setPassword(e.target.value)}
           type='password' />

           <button type="submit" className="font-semibold rounded bg-teal-600 text-gray-100 cursor-pointer w-32 h-10 mt-4 self-center">Upadate</button>
           </form>

        </div>


      {/* Right Profile Part */}
        <div className=" flex-col max-w-md p-6 dark:bg-gray-50 dark:text-gray-800 mt-5" >
	    <img src={file ? URL.createObjectURL(file) : PF+user.profilePic} 
      alt=""
      className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square" />
	  <div>
		<h2 className="text-xl font-semibold">Leroy Jenkins</h2>
		<span className="block pb-2 text-sm dark:text-gray-600">CTO of Company Inc.</span>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
	  </div>
    </div>
      
    </div> 
     )
}

export default ProfileSetting
