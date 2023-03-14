import React, { useEffect, useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import { motion } from 'framer-motion';
import { staggerContainer, growIn, textVariant } from '../utils/index.js';

import { styles } from '../styles';
import { menu, close } from '../assets';
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <motion.nav
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className='h-fit w-full flex-col justify-between items-center py-5 px-12 sm:px-20 fixed top-0 z-20'
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/about"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <motion.img src="/logo.png" alt="logo" variants={textVariant(1.5)} className='w-9 h-9 object-contain m-2
          ' />
        </Link>

        <ul className='list-none hidden sm:flex flex-row h-6 gap-12 pr-12'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`flex flex-row h-full w-24 gap-4 ${
                active === link.title ? "text-secondary" : "text-off-black"
              } hover:text-tertiary text-[18px] text-center cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <motion.div 
                variants={growIn("vertical","tween",1,1,"160%")} 
                className={`bg-off-black`}>
              </motion.div>
                <Link 
                  variants={textVariant(1.5)}
                  to={`/${link.id}`}
                  className='overflow-hidden'
                >
                  {link.title}
                </Link>
            </li> 
          ))}
        </ul>

        {/* Mobile Navbar */}
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle? close : menu} 
          alt="menu" 
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={() => setToggle(!toggle)}/>

          <div className={`${!toggle ? 'hidden' : 'flex'} absolute top-20 left-0 h-screen w-screen bg-primary`}>
            <ul className={`list-none flex flex-col h-full w-full mt-8`}>
              {navLinks.map((link) => (
              <li
                  key={link.id}
                  className={`${
                  active === link.title ? "text-secondary" : "text-off-black"
                  } text-center text-5xl ${styles.padding} ${styles.border} border-b-0 last:border-b-[1px] h-fit w-full  hover:text-tertiary text-sm cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title)
                  }}
              >
                  <Link to={`/${link.id}`}>{link.title}</Link>
              </li> 
              ))}
            </ul>
          </div>
        </div>

       </div>

      <motion.div 
        variants={growIn("horizontal","tween",1,1)} 
        className={`${styles.paddingX} bg-off-black`}>
      </motion.div>

    </motion.nav>
  )
}

export default Navbar