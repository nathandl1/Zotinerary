import React from 'react'
import LoginForm from '../components/login-form'
import Image from 'next/image'
import styles from './login.module.css'

export default function Login() {
  return (
    <div className='h-100vh flex flex-row'>
        <div className={styles.leftside}>
            <Image 
                src={'/lady_photograph.png'} 
                alt={''}
                width={1200}
                height={1920}
                className='z-0'
            />
            
        </div>
        <div className={styles.rightside}>
            <p>Welcome to:</p>
            <h1>Zotinerary</h1>
            <br/>
            <LoginForm />
        </div>
    </div>
  )
}
