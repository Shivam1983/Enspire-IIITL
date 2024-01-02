import './Hero.css'
import React from 'react'
import {motion} from 'framer-motion'

const textvariants = {
  initial: {
    x:-500,
    opacity:0,
  },
  animate: {
    x:0,
    opacity:1,
    transition: {
      duration: 1,
      staggerChildren:0.1,
    },
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition: {
      duration:2,
      repeat:Infinity
    }
  }
};
const slidervariants = {
  initial: {
    x:0,
  },
  animate: {
    x:"-220%",
    transition: {
      repeat:Infinity,
      repeatType:"mirror",
      duration: 18,
    },
  },
};

function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textcontainer" variants={textvariants} initial="initial" animate="animate" >
        <motion.h2 variants={textvariants}><motion.span id='E-Ecell'>E</motion.span>CELL IIITL </motion.h2>
        <motion.h1 variants={textvariants}><motion.span id='E2-enspire'>E</motion.span>nspire</motion.h1>
        <motion.h2 variants={textvariants}>PRESENTS</motion.h2>
        <motion.h1 variants={textvariants}><motion.span id='E2-enspire'>2</motion.span>023</motion.h1>
        
        <motion.img variants={textvariants} animate="scrollButton" src="/scroll.png" alt="#" />
        </motion.div>
    </div>

    <motion.div className="slidingTextContainer" variants={slidervariants} initial="initial" animate="animate">
    Innovation Odessey
    </motion.div>
      
      <div className="imagecontainer">
        <img src="" alt="#" />
      </div>
    </div>
  )
}

export default Hero
