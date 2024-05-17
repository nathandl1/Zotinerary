"use client"
import { redirect } from 'next/navigation';
import React from 'react'

export default function LoginForm() {
    function authenticate(formData: { get: (arg0: string) => any; }){
        const username = formData.get('username');
        const password = formData.get('password');
        console.log(`Login attempted with ${username} and ${password}`)
        if (username == 'username' && password == 'password'){
          redirect('/User');
        }
    }

  return (
    <form action={authenticate} className='flex flex-col'>
      <h2 className='text-center'>Username</h2>
      <input 
        type='text' 
        name="username" 
        className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
      />
      <h2 className='text-center'>Password</h2>
      <input
        type='text'
        name='password'
        className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
      />
      <button 
      type="submit"
      >Log In</button>
    </form>
  )
}
