import './Navbar.css'
import React from 'react'
import {motion} from 'framer-motion'
import Sidebar from '../Sidebar/Sidebar'

function Navbar() {
  return (
    <div className='navbar'>
      
      <Sidebar / >
      <div className='navbaritems'>
        <motion.span 
        initial={{ opacity:0 , scale: 0.5 }}
        animate={{ opacity:1 , scale: 1 }}
        transition={{ duration:0.8 }}
        >ENSPIRE</motion.span>
        <div className="social">
          <a href="#"><img src="/facebook.png" alt="" /></a>
          <a href="#"><img src="/instagram.png" alt="" /></a>
          <a href="#"><img src="/youtube.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar