import React from 'react'
import { motion } from "framer-motion";

function ToggleButtons({setopen}) {
  return (
    <button onClick={ () => setopen( (prev) => !prev ) }>
      <motion.img ></motion.img>
    </button>
  )
}

export default ToggleButtons