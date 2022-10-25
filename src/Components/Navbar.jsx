import React, { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import Toggler from './Toggler'

const Navbar = ({darkMode, color, handleTheme}) => {
  // let navBg = darkMode? '#000000' : '#ffffff';
  // console.log('navBg is', navBg)
  const navRef = useRef()
  const showMenu = () => {
    navRef.current.classList.toggle('translate-x-[100%]');
  }
  return (
    <nav className={`flex fixed md:static w-full justify-between transition duration-500 bg-[#000000]/90 text-white backdrop-blur h-16 px-4 md:px-4 z-20`}>
        <div className='flex my-auto'>
            <Link to='/' className={`font-logo text-md sm:text-2xl border-2 transition border-x-0 border-${color.foreground}`}>Connectify</Link>
        </div>

        {/* Toggle button */}
        <div className='my-auto'>
          <Toggler color={color} handleTheme={handleTheme} />
        </div>

        {/* Desktop Nav */}
        <div className='hidden md:flex font-body uppercase my-auto'>
            <NavLink to="/" end className={({isActive}) =>(isActive ? 'px-4 underline decoration-2 underline-offset-4' : 'px-4 hover:underline decoration-2 underline-offset-4 transition duration-500')}>Home</NavLink>
            <NavLink to='/users' className={({isActive}) =>(isActive ? 'px-4 underline decoration-2 underline-offset-4' : 'px-4 hover:underline decoration-2 underline-offset-4 transition duration-500')}>Users</NavLink>
            <NavLink to='/contact' className={({isActive}) =>(isActive ? 'px-4 underline decoration-2 underline-offset-4' : 'px-4 hover:underline decoration-2 underline-offset-4 transition duration-500')}>Contact</NavLink>
        </div>

        {/* Mobile nav & toggler */}
        <div>
        <button onClick={showMenu} className="flex absolute right-2 md:hidden p-3 transition active:scale-90">
            <FaBars size={40} />
        </button>
        <div ref={navRef} className={`flex translate-x-[100%] z-10 md:hidden transition flex-col w-[70%] items-center font-body uppercase my-auto h-screen fixed top-0 right-0 bg-${color.background} text-${color.foreground} backdrop-blur`}>
            <div className='flex justify-center mb-4 mt-[50%]' onClick={showMenu}>
              <NavLink to="/" className={({isActive}) =>(isActive ? 'px-4 underline decoration-2 underline-offset-4' : 'px-4 hover:underline decoration-2 underline-offset-4')} end>Home</NavLink>
            </div>
            <div className='flex justify-center my-4' onClick={showMenu}>
              <NavLink to='/users' className={({isActive}) =>(isActive ? 'px-4 underline decoration-2 underline-offset-4' : 'px-4 hover:underline decoration-2 underline-offset-4')}>Users</NavLink>
            </div>
            <div className='flex justify-center my-4' onClick={showMenu}>
              <NavLink to='/contact' className={({isActive}) =>(isActive ? 'px-4 underline decoration-2 underline-offset-4' : 'px-4 hover:underline decoration-2 underline-offset-4')}>Contact</NavLink>
            </div>
            <button onClick={showMenu} className="flex absolute right-2 md:hidden p-3 ease-in transition duration-500 active:scale-90">
              <FaTimes size={40}/>
            </button>
        </div>
        </div>
    </nav>
  )
}

export default Navbar;