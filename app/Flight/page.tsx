'use client'
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import Search from '@/app/ui/search';
import cardList from "@/app/data"
import Image from 'next/image';
import { useState } from 'react';
import FlightRow from './flight-row';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
export default function Flights() {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleItinerary = ()=>{
    setMenuOpen(!menuOpen);
  }
  return (
    <main className={styles.body}>
      <div className={styles.navbar}>
        <Link className={`font-bold text-yellow-400 m-0 float-left pl-5 text-lg sm:text-2xl md:text-4xl md:leading-normal`} href={'/User'}>Zotinerary</Link>
        <div className="flex flex-wrap items-center justify-end">
          <div className={`text-white m-1 text-sm sm:text-base md:text-xl md:leading-normal border-2 border-white px-1 hover:opacity-80`}>
            <Link href="/MyProfile">
              <span>
                My Profile
              </span>
            </Link>
          </div>
          <div onClick={handleItinerary} className = "hidden md:flex font-bold bg-yellow-400 text-[#1b3d6d] m-1 text-sm sm:text-base md:text-xl md:leading-normal border-2 border-yellow-400 px-1 hover:opacity-80">
            My Itinerary
          </div>
          <div className={`md:hidden font-bold bg-yellow-400 text-[#1b3d6d] m-1 text-sm sm:text-base md:text-xl md:leading-normal border-2 border-yellow-400 px-1 hover:opacity-80`}>
            <Link href="/Itinerary"> 
              <span>
                My Itinerary
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className={menuOpen ? styles.sidemenu : "hidden"}>
        <div>
          <Datetime initialValue={new Date()} closeOnClickOutside={true} className="text-sm appearance-none shadow border rounded py-3 px-2 text-gray-darker"/>
          <Datetime value={new Date()} className="text-sm appearance-none shadow border rounded py-3 px-2 text-gray-darker"/>
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
      {/* END NAVBAR */}
      <div className = "hidden md:flex h-lvh bg-[#2e3035]">
          <div className = {styles.MainContent}>
              <div>
                  <h1 className='text-center'>Search For Flights!</h1>
                  <div className="relative m-auto" style = {{maxWidth: '90%'}}>
                    <Search placeholder="Search" />
                  </div>
                  <br/>
              </div>
              <table className='border-2 border-black m-auto' style={{ width: '70vw' }}>
                  <tr className='border-2 border-black text-sm md:text-lg'>
                      <th>Airline</th>
                      <th>Date</th>
                      <th>Departure</th>
                      <th>Destination</th>
                      <th>Time</th>
                      <th>Link</th>
                  </tr>
                  <FlightRow 
                      airline={'American'} 
                      date={'5/29/2024'} 
                      departure={'SNA'} 
                      destination={'JFK'} 
                      time={'0500'} 
                      link={''}
                  />
                  <FlightRow 
                      airline={'Spirit'} 
                      date={'5/29/2024'} 
                      departure={'LAX'} 
                      destination={'SNA'} 
                      time={'0500'} 
                      link={''}
                  />
                  <FlightRow 
                      airline={'SouthWest'} 
                      date={'5/30/2024'} 
                      departure={'SNA'} 
                      destination={'JFK'} 
                      time={'1200'} 
                      link={''}
                  />
                  <FlightRow 
                      airline={'Hawaiian'} 
                      date={'5/31/2024'} 
                      departure={'LAX'} 
                      destination={'HNL'} 
                      time={'1700'} 
                      link={''}
                  />
              </table>
          </div>
      </div>
      <div className='md:hidden'>
        <div>
            <h1 className='text-center'>Search For Flights!</h1>
            <div className="relative m-auto" style = {{maxWidth: '90%'}}>
              <Search placeholder="Search" />
            </div>
            <br/>
        </div>
        <table className='border-2 border-black m-auto' style={{ width: '70vw' }}>
            <tr className='border-2 border-black text-sm md:text-lg'>
                <th>Airline</th>
                <th>Date</th>
                <th>Departure</th>
                <th>Destination</th>
                <th>Time</th>
                <th>Link</th>
            </tr>
            <FlightRow 
                airline={'American'} 
                date={'5/29/2024'} 
                departure={'SNA'} 
                destination={'JFK'} 
                time={'0500'} 
                link={''}
            />
            <FlightRow 
                airline={'Spirit'} 
                date={'5/29/2024'} 
                departure={'LAX'} 
                destination={'SNA'} 
                time={'0500'} 
                link={''}
            />
            <FlightRow 
                airline={'SouthWest'} 
                date={'5/30/2024'} 
                departure={'SNA'} 
                destination={'JFK'} 
                time={'1200'} 
                link={''}
            />
            <FlightRow 
                airline={'Hawaiian'} 
                date={'5/31/2024'} 
                departure={'LAX'} 
                destination={'HNL'} 
                time={'1700'} 
                link={''}
            />
        </table>
      </div>
    </main>
  );
}
