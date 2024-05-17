import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import Search from '@/app/ui/search';
import Image from 'next/image';
import DisplayCard from './components/display-card';
export default function Page() {
  return (
    <main className={styles.body}>
      <div className={styles.navbar}>
        <a className={`font-bold font-normal text-yellow-400 m-0 float-left pl-5 text-lg sm:text-2xl md:text-4xl md:leading-normal`}>Zotinerary</a>
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

      <div className = "position:relative bg-[#F3F0F0] md:flex">
        <div className = {styles.MainContent}>
          {/* Body of Page Here */}
          <DisplayCard 
            name={"Anonymous"} 
            src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMp2QN2WCx7VRAXuJme-AcdxJJeXRSM3obFhXX_uIKvQ&s'} 
            url={'https://www.facebook.com/naturalimagefacts/'} 
            desc={'Great Vacation!'} 
          />
          <DisplayCard 
            name={"Anonymous"} 
            src={'https://cdn.aarp.net/content/dam/aarp/travel/Domestic/2021/12/1140-oahu-hero.jpg'} 
            url={undefined} 
            desc={"Would go again!"} 
          />
          <DisplayCard 
            name={"Anonymous"} 
            src={'https://www.ocregister.com/wp-content/uploads/2018/01/0120_nws_cur-l-cm-02.jpg?w=650'} 
            url={undefined} 
            desc={"Mao?"} 
          />
          <DisplayCard 
            name={"Anonymous"} 
            src={'https://www.treesatlanta.org/wp-content/uploads/2018/06/Oldest-Tree.jpg'} 
            url={undefined} 
            desc={"Tree"} 
          />
        </div>
      </div>
    </main>
  );
}
