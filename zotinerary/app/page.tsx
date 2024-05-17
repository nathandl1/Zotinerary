import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import Search from '@/app/ui/search';
import cardList from "./data"
import Image from 'next/image';
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
          <Link href="/Login">
            <span className={`text-white m-1 text-sm sm:text-base md:text-xl md:leading-normal border-2 border-white px-1 py-1`}>
              Login
            </span>
          </Link>
          <Link href="/Signup"> 
            <span className={`font-bold bg-yellow-400 text-[#1b3d6d] m-1 text-sm sm:text-base md:text-xl md:leading-normal border-2 border-yellow-400 px-1 py-1`}>
              Signup
            </span>
          </Link>
        </div>
      </div>
      <div className="flex-grow flex justify-center items-center sm:hidden">
        <div className="relative" style = {{minWidth: '100%'}}>
          <Search placeholder="Search" />
        </div>
      </div>
      <div className = "hidden md:flex h-lvh bg-[#2e3035]">
        <div className = {styles.MainContent}>
          <div className = "grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 mx-5">
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
        <div className = "grid sm:grid-cols-2 gap-3 mt-5 mx-5">
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
