import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import Search from '@/app/ui/search';
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
          <Link href="/MyProfile">
            <span className={`text-white m-1 text-sm sm:text-base md:text-xl md:leading-normal border-2 border-white px-1 py-1`}>
              My Profile
            </span>
          </Link>
          <Link href="/Itinerary"> 
            <span className={`font-bold bg-yellow-400 text-[#1b3d6d] m-1 text-sm sm:text-base md:text-xl md:leading-normal border-2 border-yellow-400 px-1 py-1`}>
              Create Itinerary
            </span>
          </Link>
        </div>
      </div>
      <div className="flex-grow flex justify-center items-center sm:hidden">
        <div className="relative" style = {{minWidth: '100%'}}>
          <Search placeholder="Search" />
        </div>
      </div>
      <div className = "hidden bg-[#F3F0F0] md:flex">
        <div className = {styles.MainContent}>
        </div>
      </div>
    </main>
  );
}