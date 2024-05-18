import React from 'react'
import LoginForm from './signup-form'
import Image from 'next/image'
import styles from './signup.module.css'
import SignUpForm from './signup-form'

export default function Login() {
  return (
    <div className='h-100vh flex flex-row'>
        <div className={styles.leftside}>
            <Image 
                src={'/lady_photograph.png'} 
                alt={''}
                width={2000}
                height={1920}
                className='z-0'
                style={{objectFit: "cover"}}
            />
        </div>
        <div className={styles.rightside}>
            <p>Welcome to:</p>
            <h1 className = "text-lg md:text-4xl">Zotinerary</h1>
            <br/>
            <SignUpForm />
        </div>
    </div>
  )
}