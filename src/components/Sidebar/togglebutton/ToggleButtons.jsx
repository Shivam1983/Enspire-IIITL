import React from 'react'
import { motion } from "framer-motion";

function ToggleButtons({setopen}) {
  return (
    <button className='togglebutton' onClick={ () => setopen( (prev) => !prev ) }>
      button
    </button>
  )
}

export default ToggleButtons