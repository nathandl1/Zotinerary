'use client'
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import Search from '@/app/ui/search';
import cardList from "@/app/data"
import Image from 'next/image';
import { useState } from 'react';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleItinerary = ()=>{
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  }
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
      <div className="flex-grow flex justify-center items-center sm:hidden">
        <div className="relative" style = {{minWidth: '100%'}}>
          <Search placeholder="Search" />
        </div>
      </div>
      <div className = "hidden md:flex h-lvh bg-[#2e3035]">
        <div className = {styles.MainContent}>
          <div className = "grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 mx-5">
            {cardList.map(card => (
              <div className = 'shadow-lg border rounded-lg bg-white hover:opacity-80'>
                <h3 className = "text-lg font-bold pl-2 py-1">{card.username}</h3>
                <img src = {card.img}/>
                <p className = "text-lg px-3">{card.title}</p>
                <p className = "text-base px-8">{card.time}</p>
                <div className = "flex px-2 pt-3">
                  <div className = "flex-none">
                    <Image width = {30} height = {30} src = "/like.png" alt = "Like Icon" className = "flex-none"></Image>
                  </div>
                  <p className = {styles.cardtext}>{card.likes}</p>
                  <div className = "flex flex-grow justify-end">
                    <div className = "flex-none">
                      <Image width = {30} height = {30} src = "/comment.webp" alt = "Like Icon" className = "flex-none"></Image>
                    </div>
                    <p className = {styles.cardtext}>{card.comments}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className = "md:hidden">
        <div className = "grid sm:grid-cols-2 sm:pt-12 gap-3 pt-4 mx-5">
          {cardList.map(card => (
            <div className = 'shadow-lg border rounded-lg bg-white'>
              <h3 className = "text-lg font-bold pl-2 py-1">{card.username}</h3>
              <img src = {card.img}/>
              <p className = "text-lg px-3">{card.title}</p>
              <p className = "text-base px-8">{card.time}</p>
              <div className = "flex px-2 pt-3">
              <div className = "flex-none">
                <Image width = {30} height = {30} src = "/like.png" alt = "Like Icon" className = "flex-none"></Image>
              </div>
              <p className = {styles.cardtext}>{card.likes}</p>
              <div className = "flex flex-grow justify-end">
                <div className = "flex-none">
                  <Image width = {30} height = {30} src = "/comment.webp" alt = "Like Icon" className = "flex-none"></Image>
                </div>
                <p className = {styles.cardtext}>{card.comments}</p>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </main>
  );
}