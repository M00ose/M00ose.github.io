import React from 'react'
import { motion } from 'framer-motion';
import { staggerContainer, borderFill, fillIn, growIn, textVariant, slideIn } from '../utils/index.js';

import { styles } from '../styles'
import { projects } from "../constants";
import Footer from './Footer.jsx';

const Project = (props) => {
  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className={`relative snap-start h-screen w-screen ${styles.padding} flex flex-col justify-center items-center md:items-start`}
    >
        <div className={`${styles.padding}`}>
            <div className={`relative ${styles.flexColRow} items-center`}>
                <h2 className={`absolute top-0 -translate-y-20 md:-translate-y-24 ${styles.padding} text-2xl lg:text-4xl`}> <span className='text-base xl:text-2xl'>/02</span> Projects</h2>

                {/* Image */}
                <motion.div variants={slideIn("left","tween",0.5,1)} className='relative h-[60vh] w-fit drop-shadow-xl'>
                    <div className='absolute bg-black opacity-20 h-full w-full'></div>
                    <img src={props.image} alt={props.name} className='h-full w-auto max-w-[80vw] object-cover'/>
                </motion.div>
            </div>
        </div>

        {/* Description */}        
        <div className={`absolute inset-y-2/4 md:inset-y-1/4 md:inset-x-1/3 h-[45vh] md:h-[50vh] w-[90vw] md:w-[60vw] overflow-hidden drop-shadow-xl`}>
          <motion.div 
            variants={fillIn("right","tween",0.2,1)} 
            className={`h-full w-full bg-white`}></motion.div>
        </div>

        <div className={`absolute flex flex-col gap-4 inset-y-2/4 md:inset-y-1/4 md:inset-x-1/3 ${styles.padding} h-[40vh] md:h-[50vh] w-[90vw] md:w-[60vw] z-10`}>
            <motion.p variants={textVariant(1.5)} className='flex-1'>{props.description}</motion.p>

            <motion.div
              variants={growIn("horizontal","tween",1.5,1)} 
              className='bg-off-black'>
            </motion.div>

            <motion.p variants={textVariant(2)}>{props.tech}</motion.p>

            <motion.div variants={textVariant(2)} className='flex gap-4 justify-end items-center'>
              <div className='bg-tertiary text-white px-6 py-1 rounded-xl'>{props.tag}</div>
              <a href={props.link} className={`${!props.link ? 'hidden' : 'visible'}`}>Website <span>&#8599;</span></a>
              <a href={props.github} className='text-right hover:italic'>Github <span>&#8599;</span></a>
            </motion.div>
        </div>
        

        {/* Title */}
        <motion.div 
            variants={textVariant(2.5)} 
            className={`absolute md:left-[28%] inset-y-[48%] md:inset-y-[23%] min-w-[300px] h-fit w-fit p-2 bg-tertiary ${styles.border} z-10 text-center`}>{props.name}
        </motion.div>
        <Footer />
      
    </motion.div>
  )
};

const Projects = () => {
  return (
    <div>
      {projects.map((project) => (
        <Project 
          key={project.name}
          name={project.name} 
          description={project.description}
          tag={project.tag}
          tech={project.tech}
          image={project.image}
          link={project.link}
          github={project.github}
        />
      ))};
    </div>
  )
};

export default Projects