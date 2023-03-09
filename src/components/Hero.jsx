import React from 'react'
import { motion } from 'framer-motion';
import { slideIn, staggerContainer } from '../utils/index.js';

import { styles } from '../styles'

const Hero = () => {
  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className='flex justify-center items-center h-full w-full px-12 py-14'
    >

      {/* <motion.div 
        variants={slideIn("left","tween",0.5,1)} 
        className={`${styles.lineX}`}>
      </motion.div>
      <motion.div 
        variants={slideIn("up","tween",0.5,1)}
        className={`${styles.lineY}`}>
      </motion.div>
      <motion.div 
        variants={slideIn("left","tween",0.5,1)} 
        className={`${styles.lineX}`}>
      </motion.div>
      <motion.div 
        variants={slideIn("down","tween",0.5,1)}
        className={`${styles.lineY}`}>
      </motion.div>
      <motion.div 
        variants={slideIn("left","tween",0.5,1)} 
        className={`${styles.lineX}`}>
      </motion.div> */}

    </motion.div>
  )
}

export default Hero