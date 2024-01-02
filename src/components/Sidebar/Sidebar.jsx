import React from 'react'
import './Sidebar.css'
import ToggleButtons from './togglebutton/ToggleButtons'
import Links from './Links/Links'
import {motion} from 'framer-motion'
import { useState } from 'react'

function Sidebar() {
  const [open, setopen] = useState(false)

  const variants = {
    open:{
      clipPath: "circle(1200px at 50px 50px)"
    },
    closed:{
      clipPath:"circle(25px at 50px 50px)",
      transition:{
        delay:0.1,
        type:"spring",
        stiffness:400,
        damping:40
      }
    }
  }

  return (
    <motion.div className='sidebar' animate={open? "open" : "closed"} >
      <motion.div className='bg' variants={variants}> 
        <Links/>
      </motion.div>
      <ToggleButtons setopen={setopen} />
    </motion.div>
  )
}

export default Sidebar