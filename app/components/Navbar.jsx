"use client"
import Link from 'next/link'
import React, {useState} from 'react'
import NavLink from './NavLink'
import {Bars3Icon, ArchiveBoxXMarkIcon} from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';


const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Work Experience",
        path: "#work",
    },
    {
        title: "Eduction",
        path: "#eduction",
    },
    {
        title: "Contact",
        path: "#contact",
    },
]

const Navbar = () => {
    // states
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-opacity-90 bg-[#121212]'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-8 py-4'>
            <Link href={"/"} className='text-l md:text-5xl text-white font-semibold'>
                Vageshwar
            </Link>
            <div className='mobile-menu block md:hidden'>
                {
                    navbarOpen ?
                    <button onClick={()=>setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200'>
                        <Bars3Icon className='h-5 w-5' />
                    </button>
                    :
                    <button onClick={()=>setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200'>
                        <ArchiveBoxXMarkIcon className='h-5 w-5' />
                    </button>
                }
            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                    {
                        navLinks.map((link, index) => <li>
                            <NavLink href={link.path} title={link.title} />
                        </li>)
                    }
                </ul>
            </div>
        </div>
        {
            navbarOpen
            ?
                <MenuOverlay links={navLinks} />
            :
                null
        }
    </nav>
  )
}

export default Navbar