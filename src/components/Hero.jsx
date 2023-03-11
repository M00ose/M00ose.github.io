import React from 'react'
import { motion } from 'framer-motion';
import { staggerContainer, growIn, textVariant } from '../utils/index.js';

import { styles } from '../styles'
import { profile } from '../assets';
import { technologies } from "../constants";

const Hero = () => {
  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className={`${styles.padding} flex flex-col justify-start items-start h-full w-full`}
    >
      <div className={`${styles.padding} flex flex-col w-full`}>
        <div className={`${styles.flexRow} py-6`}>
          <div className='flex flex-col justify-between gap-8'>
            <motion.div variants={textVariant(2)} className='w-96'>
              <div id="tooltip" role="tooltip" className='absolute opacity-0 hover:opacity-100 bg-black inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 rounded-lg shadow-sm'>Hello</div>
              <h1 className='text-6xl'>MOOOSE</h1>
              <h2 className='text-6xl text-off-grey font-extrabold'>WEB DEVELOPER</h2>
            </motion.div>

            <motion.div variants={textVariant(2.5)} className="flex flex-row gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2e2e19" fill="none" stroke-linecap="round" stroke-linejoin="round" className='cursor-pointer hover:-translate-y-1'>
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <line x1="8" y1="11" x2="8" y2="16" />
                <line x1="8" y1="8" x2="8" y2="8.01" />
                <line x1="12" y1="16" x2="12" y2="11" />
                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2e2e19" fill="none" stroke-linecap="round" stroke-linejoin="round" className='cursor-pointer hover:-translate-y-1'>
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
            </motion.div>
          </div>

          <motion.div variants={textVariant(2)} className={`${styles.paddingX} ${styles.flexCol}`}>
            <div className='flex flex-row items-end'>
              <img class="profile" src={profile} alt="Tyrone Jacalan"/>
              <h2 className='-translate-x-10 -translate-y-5 text-2xl'> <span className='text-base'>/01</span> About</h2>
              
            </div>
            
            <div className={`${styles.flexCol}`}></div>
            <p>Hi! My name is <span className='text-off-grey font-extrabold'>Tyrone Jacalan</span>, but you can call me Mooose.</p>
            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, omnis.</p>
            <p>Today I'm enthralled by web development. Creating new experiences, implementing eye pleasing designs and making them come to life with animation is what I do best.</p>
          </motion.div>
          
        </div>

        <motion.div 
          variants={growIn("vertical","tween",1,1)} 
          className={`absolute left-[490px] bg-off-black max-h-[80vh] overflow-hidden`}>
        </motion.div>

        <motion.div 
          variants={growIn("horizontal","tween",1,1)} 
          className='bg-off-black'>
        </motion.div>
        
        <div className={`${styles.flexRow} py-6`}>
          <div>
            <motion.p variants={textVariant(2.5)} className='w-96'>Based in Metro Manila, Philippines</motion.p>
          </div>

          <motion.div variants={textVariant(2.5)} className={`${styles.paddingX} relative grid grid-flow-col gap-4 overflow-visible`}>
            {technologies.map((tech) => (
                <div className='relative flex items-center justify-center h-[50px] min-w-[50px] border-[0.5px] border-solid border-off-black p-2 object-contain'>
                  <img src={tech.icon} alt={tech.name}/>
                </div>
                // TODO: Add tooltip
                // TODO: Add infinity scrolling
            ))}
          </motion.div>
        </div>
      </div>

    </motion.div>
  )
}

export default Hero