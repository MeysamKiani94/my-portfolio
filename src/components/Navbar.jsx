import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants/index.js'
import { logo, menu, close } from '../assets/index.js'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [menuIsShown, setMenuIsShown] = useState(false)
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center justify-center py-5 fixed top-0 z-20 bg-primary `}
    >
      <div className=' flex items-center justify-between w-full max-w-5xl '>
        <Link
          to='/'
          className=' flex items-center gap-2'
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0) // scroll to the top of the page
          }}
        >
          <img
            className=' max-w-[60px] h-auto '
            src={logo}
            alt='logo'
          />

          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Meysam Kiani
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-14  '>
          {navLinks.map(nav => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font font-medium cursor-pointer `}
              onClick={() => setActive(nav.title)} // set active nav
            >
              <a href={`#${nav.id}`}> {nav.title} </a>
            </li>
          ))}
        </ul>
        {/* show the ul in large screen. show the below div in small */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={menuIsShown ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setMenuIsShown(!menuIsShown)}
          />
          <div
            className={`${
              menuIsShown ? 'flex' : 'hidden'
            } p-6 black-gradient absolute top-20 right-5 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}
          >
            <ul className='list-none flex flex-col justify-end items-start gap-4 '>
              {navLinks.map(nav => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? 'text-white' : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[16px]  `}
                  onClick={() => {
                    setMenuIsShown(!menuIsShown)
                    setActive(nav.title)
                  }} // set active nav
                >
                  <a href={`#${nav.id}`}> {nav.title} </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* end of small menu */}
      </div>
    </nav>
  )
}

export default Navbar
