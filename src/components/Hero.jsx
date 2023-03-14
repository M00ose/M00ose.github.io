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
      <div className={`flex flex-col justify-between h-full w-full px-6 md:px-12 pb-0 md:pt-12 pt-10`}>
        {/* Top */}
        <div className={`flex-1 ${styles.flexColRow} py-6`}>
          {/* Title */}
          <div className={`${styles.flexRowCol} items-end md:items-start ${styles.paddingY} md:py-0`}>
            <motion.div variants={textVariant(2)} className='flex flex-col md:w-56 xl:w-[500px]'>
              <h1 className='text-4xl xl:text-6xl xxl:text-9xl'>MOOOSE</h1>
              <h2 className='text-2xl md:text-4xl xl:text-6xl text-secondary font-bold'>WEB DEVELOPER</h2>
            </motion.div>

            <motion.div variants={textVariant(2.5)} className="flex flex-row gap-4">
              <a href="https://www.linkedin.com/in/ty-j-2772281a4/" className='font-bold hover:italic'>LinkedIn</a>
              <a href="https://github.com/M00ose" className='hover:italic'>Github</a>
            </motion.div>
          </div>

          {/* Horizontal Separator */}
          <motion.div 
            variants={growIn("horizontal","tween",1,1)} 
            className='md:hidden bg-off-black mb-4'>
          </motion.div>

          {/* About */}
          <motion.div variants={textVariant(2)} className={`md:pl-12 ${styles.flexCol} xl:w-[700px] xxl:pl-48`}>
            <div className='flex flex-row items-end h-40'>
              <img className="profile" src={profile} alt="Tyrone Jacalan"/>
              <h2 className='-translate-x-10 -translate-y-5 text-2xl lg:text-4xl'> <span className='text-base xl:text-2xl'>/01</span> About</h2>
            </div>
            
            <div className={`${styles.flexCol} text-sm xl:text-base xxl:xl`}>
              <p>Hi! My name is <span className='text-secondary font-bold'>Tyrone Jacalan</span>, but you can call me Mooose.</p>
              <p>I am a freelance web developer with a passion for making the internet come to life and helping others by designing and creating robust systems.</p>
            </div>
            
          </motion.div>
          
        </div>

        {/* Horizontal Separator */}
        <motion.div
          variants={growIn("horizontal","tween",1,1)} 
          className='bg-off-black'>
        </motion.div>
        
        {/* Bottom */}
        <div className={`${styles.flexColRow} py-6`}>
          {/* Location */}
          <div>
            <motion.p variants={textVariant(2.5)} className='w-full md:w-56 xl:w-[500px] text-sm xl:text-base xxl:text-xl'>Based in Metro Manila, Philippines</motion.p>
          </div>

          {/* Technologies */}
          <motion.div variants={textVariant(2.5)} className={`mx-0 md:mx-12 xxl:ml-48 relative grid grid-flow-col gap-4 overflow-hidden`}>
            {technologies.map((tech) => (
                <div key={tech.name} className={`relative flex items-center justify-center h-[8vw] md:h-[4vw] w-[8vw] md:w-[4vw] border-[0.5px] border-solid border-off-black p-2 object-contain ${styles.infiniteScroll}`}>
                  <img src={tech.icon} alt={tech.name}/>
                </div>
            ))}
          </motion.div>
        </div>
        
        {/* Vertical Separator */}
        <motion.div 
          variants={growIn("vertical","tween",1,1)} 
          className={`invisible md:visible absolute left-[345px] xl:left-[620px] xxl:left-[720px] bg-off-black max-h-[82vh] overflow-hidden`}>
        </motion.div>
      </div>

    </motion.div>
  )
}

export default Hero