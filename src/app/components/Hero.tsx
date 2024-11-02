'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon'
import FaceBookCircleLineIcon from 'remixicon-react/FacebookCircleLineIcon'
import GitHubLineIcon from 'remixicon-react/GithubLineIcon'
import LinkedinBoxLineIcon from 'remixicon-react/LinkedinBoxLineIcon'
import { useMotionValue, useTransform, motion, useSpring } from 'framer-motion'

const HeroSection = () => {

    const [windowOffset, setWindowOffset] = useState({innerWidth: 0, innerHeight: 0})
    const [mouseMove, setMouseMove] = useState(false)
    const [buttonHover, setButtonHover] = useState(false)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const {clientX, clientY} = e
        x.set(clientX)
        y.set(clientY)
    }

    const handleMouseEnter = () => {
        setWindowOffset({innerWidth: window.innerWidth, innerHeight: window.innerHeight})
        setMouseMove(true)
    }

    const {innerWidth, innerHeight} = windowOffset

    const xSpring = useSpring(x, {stiffness: 100, damping: 10})
    const ySpring = useSpring(y, {stiffness: 100, damping: 10})

    const rotatY = useTransform(xSpring, [0, innerWidth], [-30, 30])
    const rotatX = useTransform(ySpring, [0, innerHeight], [10, -50])

    return (
    <div
        id='home'
        className='h-screen grid place-items-center'
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
    >
        <div>
            <div className='flex flex-col items-center justify-center gap-y-3 font-light capitalize'>
                <motion.div
                    initial={{opacity: 0, y: -100}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.5}}
                    className='flex items-center justify-center'
                    style={{
                        rotateX: mouseMove ? rotatX : 0,
                        rotateY: mouseMove ? rotatY : 0,
                        transition: '0.1s'
                    }}    
                >
                    <Image
                        src='/luffy.webp'
                        alt='huynh minh hai'
                        width={400}
                        height={400}
                        priority={true}
                        className='h-auto w-[220px]'
                    />
                    <motion.span
                        className='absolute text-3xl font-semibold text-white'
                        initial={{scale: 0}}
                        animate={{
                            opacity: buttonHover ? 0 : 1,
                            scale: buttonHover ? 3 : 0,
                            y: buttonHover ? -60 : 0
                            // opacity: 1,
                            // scale: 3,
                            // y: -40
                        }}
                        transition={{opacity: {delay: 0.4}}}
                    >Hi</motion.span>
                </motion.div>
                <h1 className='text-center text-3xl font-bold tracking-wider text-gray-500 sm:text-2xl dark:text-white'>I am Huynh Minh Hai &</h1>
                <p className='text-lg tracking-wider text-gray-700 dark:text-white'>I like animations 😁</p>
            </div>
            <div className='mt-8 flex justify-center gap-x-6 text-3xl text-yellow-600 sm:text-2xl'>
                <a href="#" className='rounded hover:bg-red-400 hover:text-white transition-all'>
                    <FaceBookCircleLineIcon />
                </a>
                <a href="#" className='rounded hover:bg-red-400 hover:text-white transition-all'>
                    <InstagramLineIcon />
                </a>
                <a href="#" className='rounded hover:bg-red-400 hover:text-white transition-all'>
                    <GitHubLineIcon />
                </a>
                <a href="#" className='rounded hover:bg-red-400 hover:text-white transition-all'>
                    <LinkedinBoxLineIcon />
                </a>
            </div>
            <a
                href="#"
                className='mx-auto mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-500 transition-all'
                onMouseEnter={() => setButtonHover(true)}
                onMouseLeave={() => setButtonHover(false)}
            >
                Talk to me
            </a>
        </div>
    </div>
  )
}

export default HeroSection