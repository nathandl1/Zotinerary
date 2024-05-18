'use client'
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import Search from '@/app/ui/search';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
export default function Page() {
    return (
        <main className={styles.body}>
            <div className={styles.navbar}>
                <a className={`font-bold text-yellow-400 m-0 float-left pl-5 text-lg sm:text-2xl md:text-4xl md:leading-normal`}>Zotinerary</a>
                <div className="hidden flex-grow flex justify-center items-center p-2 sm:flex">
                    <div className="relative" style = {{minWidth: '50%'}}>
                        <Search placeholder="Search" />
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-end">
                    <div className={`text-white m-1 text-sm sm:text-base md:text-xl md:leading-normal border-2 border-white px-1 hover:opacity-80`}>
                        <Link href="/Login">
                            <span>
                            Login
                            </span>
                        </Link>
                    </div>
                    <div className={`md:hidden font-bold bg-yellow-400 text-[#1b3d6d] m-1 text-sm sm:text-base md:text-xl md:leading-normal border-2 border-yellow-400 px-1 hover:opacity-80`}>
                        <Link href="/Signup"> 
                            <span>
                            Sign Up
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className = "px-5 pt-10">
                <div>
                    <Datetime initialValue={new Date()} closeOnClickOutside={true} className="text-sm appearance-none shadow border rounded py-3 px-2 text-gray-darker"/>
                    <Datetime initialValue={new Date()} closeOnClickOutside={true} className="text-sm appearance-none shadow border rounded py-3 px-2 text-gray-darker"/>
                </div>
                <div>
                    <h1> Destinations</h1>
                    <Link href="/Destination"> 
                        <span className = "text-lg">
                        + Add Stop
                        </span>
                    </Link>
                    <div className ={styles.line2}></div>
                </div>
                <div>
                    <h2> Flights</h2>
                    <Link href="/Flight" > 
                        <span className = "text-lg">
                        + Add Flight
                        </span>
                    </Link>
                    <div className ={styles.line2}></div>
                </div>
                <div>
                    <h1> Cruises</h1>
                    <Link href="/Cruises" > 
                        <span className = "text-lg">
                        + Add Cruise
                        </span>
                    </Link>
                    <div className ={styles.line2}></div>
                </div>
                <div>
                    <h1> Rental Vehicles</h1>
                    <Link href="/Rentals" > 
                        <span className = "text-lg">
                        + Add Rental
                        </span>
                    </Link>
                    <div className ={styles.line2}></div>
                </div>
            </div>
        </main>
    );
}