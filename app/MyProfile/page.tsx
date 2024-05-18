'use client'
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import Search from '@/app/ui/search';
import Image from "next/image";
import cardList from "@/app/userdata"
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
                Add Post
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
          <Link href="https://www.yelp.com/"> 
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
          <Link href="/https://www.cruises.com/" > 
            <span className = "text-lg">
              + Add Cruise
            </span>
          </Link>
          <div className ={styles.line2}></div>
        </div>
        <div>
          <h1> Rental Vehicles</h1>
          <Link href="https://www.expedia.com/Car-Rentals-In-Rowland-Heights.d9646.Car-Rental-Guide" > 
            <span className = "text-lg">
              + Add Rental
            </span>
          </Link>
          <div className ={styles.line2}></div>
        </div>
      </div>
      <div className = "hidden bg-[#2e3035] height-100vh width-100v  md:flex">
        <div className = {styles.MainContent}>
          <div className = {styles.Profile}>
            <div className="flex-none mr-2">
              <Image width={200} height={200} className={styles.ProfilePic} src="/Raymond.jpg" alt="My Profile Picture"></Image>           </div>
            <div className = {styles.ProfileInfo}>
              <a className = "font-bold text-4xl"> Raymond Klefstad</a>
              <div className = "flex my-5">
                <div className = "flex-none">
                  <Image width = {40} height = {40} src = "/like.png" alt = "Like Icon" className = "flex-none"></Image>
                </div>
                <a className = "font-bold text-2xl px-2 "> 15,672 Likes</a>
                <div className = "flex-none">
                  <Image width = {40} height = {40} src = "/comment.webp" alt = "Comment Icon" className = "flex-none"></Image>
                </div>
                <a className = "font-bold text-2xl px-2 "> 2,172 Comments</a>
              </div>
              <p className = "text-sm">🐠 Scuba Diver & Ocean Enthusiast 🌊 | Exploring the depths one dive at a time | 📸 Sharing underwater adventures | #ScubaLife 🦑</p>
            </div>
          </div>
          <div className ={styles.line}></div>
          <div>
            <div className = "flex my-3 justify-center items-center m-auto">
              <div className = "flex-none">
                <Image width = {30} height = {30} src = "/addpost.png" alt = "Like Icon" className = "flex-none"></Image>
              </div>
              <a className = "font-bold text-2xl px-2 "> My Posts</a>
              <div className = "flex-none">
                <Image width = {30} height = {30} src = "/savepost.png" alt = "Comment Icon" className = "flex-none"></Image>
              </div>
              <a className = "font-bold text-2xl px-2 "> Saved Posts</a>
            </div>
          </div>
          <div className ={styles.line}></div>
          <div className = "grid md:grid-cols-2 lg:grid-cols-3 mt-5 mx-5">
            {cardList.map(card => (
              <div className = 'shadow-lg border rounded-lg bg-white hover:opacity-80'>
                <img src = {card.img}/>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className = "md:hidden">
        <div className = "pt-7">
        <div className = {styles.Profile}>
          <div className="flex-none mr-2">
            <Image width={150} height={150} className={styles.ProfilePic} src="/Raymond.jpg" alt="My Profile Picture"></Image>           
          </div>
          <div className = {styles.ProfileInfo}>
            <a className = "font-bold text-xl"> Raymond Klefstad</a>
            <div className = "flex flex-wrap my-5">
              <div className = "flex">
                <div className = "flex-none">
                  <Image width = {40} height = {40} src = "/like.png" alt = "Like Icon" className = "flex-none"></Image>
                </div>
                <a className = "font-bold text-lg px-2 "> 15,672 Likes</a>
              </div>
              <div className = "flex">
                <div className = "flex-none">
                  <Image width = {40} height = {40} src = "/comment.webp" alt = "Comment Icon" className = "flex-none"></Image>
                </div>
                <a className = "font-bold text-lg px-2 "> 2,172 Comments</a>
              </div>
            </div>
          </div>
        </div>
        <p className = "text-sm mx-10">🐠 Scuba Diver & Ocean Enthusiast 🌊 | Exploring the depths one dive at a time | 📸 Sharing underwater adventures | #ScubaLife 🦑</p>
        <div className ={styles.line}></div>
        <div>
          <div className = "flex my-1 justify-center items-center m-auto">
            <div className = "flex-none">
              <Image width = {30} height = {30} src = "/addpost.png" alt = "Like Icon" className = "flex-none"></Image>
            </div>
            <a className = "font-bold text-lg px-2 "> My Posts</a>
            <div className = "flex-none">
              <Image width = {30} height = {30} src = "/savepost.png" alt = "Comment Icon" className = "flex-none"></Image>
            </div>
            <a className = "font-bold text-lg px-2 "> Saved Posts</a>
          </div>
        </div>
        <div className ={styles.line}></div>
        <div className = "grid sm:grid-cols-2 mt-5 mx-5">
          {cardList.map(card => (
            <div className = 'shadow-lg border rounded-lg bg-white hover:opacity-80'>
              <img src = {card.img}/>
            </div>
          ))}
        </div>
        </div>
      </div>
    </main>
  );
}