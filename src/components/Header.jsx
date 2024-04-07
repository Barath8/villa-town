import React from "react"
import {Link }from 'react-router-dom'
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className='bg-slate-300 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto'>
        <h1 className='font-bold text-sm sm:text-xl xl flex flex-wrapc'>
            <span className='text-slate-500'>Barath's</span>
            <span className='text-slate-700'>Estate</span>
            </h1>
            <form className='bg-slate-100 p-3 rounded-lg flex items-center' >
                <input type="text" placeholder="Search..." className='bg-transparent focus:outline-none w-24 sm:w-64'/>
                <FaSearch className='text-slate-600'/>       
                <ul className='flex gap-4'>
                <Link to='/'>
                    <li className='hidden sm:inline text-slate-700 hove:underline'>Home</li></Link>
                 <Link to="/about">
                      <li className='hidden sm:inline text-slate-700 hove:underline'>About</li></Link>
                      <Link to="/sign-in">
                            <li className='hidden sm:inline text-slate-700 hove:underline'>Signin</li></Link>
                        
                </ul>
                </form>
                </div>
            </header>
  )
}

export default Header;