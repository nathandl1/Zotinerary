"use client"
import { redirect } from 'next/navigation';
import React from 'react'
import Link from 'next/link'
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
          <h2 className='text-center'>Email</h2>
          <input 
            type='text' 
            name="Username" 
            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          />
          <h2 className='text-center'>Password</h2>
          <input
            type='text'
            name='password'
            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          />
          <div className = "flex justify-center bg-blue-500 text-white rounded-md px-4 py-2 mt-4 hover:bg-blue-600">
            <button 
            type="submit"
            >Login</button>
          </div>
        </form>
      )
}