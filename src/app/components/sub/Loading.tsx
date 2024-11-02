'use client'
import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'

const Loading = () => {
  const [load, setLoad] = useState(false)

  useEffect(() => {
    setLoad(true)
  }, [])

  return (
    <motion.div
      initial={{top: 0}}
      animate={{top: load ? '-100%' : 0}}
      transition={{duration: 0.5}}
      className='w-full h-full fixed left-0 top-0 flex items-center justify-center bg-white dark:bg-zinc-800 z-50'
    >
      <img src="/ship.gif" alt="loading" />
    </motion.div>
  )
}

export default Loading