import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Register = () => {
  const[username, setUsername]=useState("");
  const[email, setEmail]=useState("");
  const[password, setPassword]=useState("");
  const[error, setError]=useState(false);

  const handleSubmit=async(e)=>{
    e.preventDefault();
    setError(false);
    try{
      const res=await axios.post("auth/register",{
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    }
    catch(err)
    {
      setError(true);

    }
  }

  return (
    <div className='m-6 rounded-[12px] border border-gray-800 '>
    <section className="relative flex flex-wrap lg:items-center" style={{height: "600px"}}>
    <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

      <p className="mt-4 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
        ipsa culpa autem, at itaque nostrum!
      </p>
    </div>

    <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4"
    onSubmit={handleSubmit}>

<div>
        <label htmlFor="username" className="sr-only">Username</label>

        <div className="relative">
          <input
            type="username"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter username"
            onChange={e=>setUsername(e.target.value)}

          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relative">
          <input
            type="email"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter email"
            onChange={e=>setEmail(e.target.value)}
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">Password</label>

        <div className="relative">
          <input
            type="password"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter password"
            onChange={e=>setPassword(e.target.value)}

          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Already have an account?
          <a className="underline" href="#"><Link to='/login'>Login</Link></a>
        </p>

        <button
          type="submit"
          className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        
        >
          Register
        </button>
      </div>
    </form>
  
  {error && 
    <div className='text-center mt-2 text-red-600 '>
    <h2>Something went wrong !</h2>
    </div>
  }
  </div>
 
  <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <img
      alt=""
      src="https://images.unsplash.com/photo-1543599538-a6c4f6cc5c05?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      className="absolute inset-0 h-full w-full object-cover rounded-[12px]"
    />
  </div>
</section>
</div>
  )
}

export default Register
