'use client'
import Image from "next/image"
import Heading from "./sub/Heading"
import ArrowLeftSFillIcon from "remixicon-react/ArrowLeftSFillIcon"
import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from "react"

const experiences = [
    {
        year: 2018,
        title: 'Foundation and Basics',
        education: 'TDT',
        experiences: [
            'html/css/js',
            'reactjs'
        ]
    },
    {
        year: 2022,
        title: 'Advanced learning',
        education: 'TOT',
        experiences: [
            'html/css/js - bootstrap/jquery',
            'reactjs - nextjs'
        ]
    },
]

const ExperienceSection = () => {

    const containerRef = useRef(null)
    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ['start 95%', 'end end']
    })
    
    const scrollY = useSpring(scrollYProgress, {stiffness: 200, damping: 20})
    return (
        <div className="relative py-20 px-96">
            <Heading text="Experience & Education" />
            <Image
                src='/sanji1.png'
                alt="Experience & Education"
                width={400} height={400}
                className="w-[220px] absolute -top-4 right-96 opacity-70 lg:hidden"
            />
            <div
                className="w-full h-full flex flex-col items-center justify-center gap-y-10 lg:gap-y-20 py-10"
                ref={containerRef}
            >
                {
                    experiences.map((item, i) => (
                        <div
                            key={item.title}
                            className={`w-[600px] xl:w-[400px] sm:w-full px-12 sm:px-0 relative ${
                                i % 2 === 0
                                ? '-left-[300px] xl:-left-[240px] lg:-left-0'
                                : 'left-[300px] xl:left-[240px] lg:left-0'
                            }`}
                        >
                            <motion.div
                                initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{once: true}}
                                transition={{duration: 0.7, type: 'spring', stiffness: 50}}
                                className="relative flex flex-col gap-y-3 rounded-md border border-red-300 bg-white p-4 tracking-wide sm:text-sm"
                            >
                                <h1 className="text-xl sm:text:lg font-light text-gray-700">{item.title}</h1>
                                <p className="text-gray-800">
                                    <span className="block font-light">Education:</span>
                                    <span className="block pl-2 font-extralight">{item.education}</span>
                                </p>
                                <div className="text-gray-800">
                                    <span className="font-light">Experience:</span>
                                    <ul className="pl-2">
                                        {
                                            item.experiences.map((exp, i) => (
                                                <li key={i} className="my-1 font-extralight">{exp}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <span className={`absolute top-20 text-red-300 -translate-y-1/2 ${
                                    i % 2 === 0
                                    ? 'left-full rotate-180 -translate-x-1.5'
                                    : 'right-full translate-x-1.5'
                                }`}><ArrowLeftSFillIcon /></span>
                            </motion.div>
                            <div className={`w-14 absolute top-20 border border-gray-300 rounded-full aspect-square grid place-items-center text-red-400 font-light -translate-y-1/2 z-10 bg-white ${
                                i % 2 === 0
                                ? 'left-full -translate-x-1/2 lg:left-1/2'
                                : 'right-full translate-x-1/2 lg:right-1/2'
                            }`}>{item.year}</div>
                        </div>
                    ))
                }
                <motion.div
                    initial={{scaleY: 0}} 
                    style={{
                        scaleY: scrollY
                    }}
                    className="absolute w-[2px] h-full rounded-full bg-red-300 origin-top"
                ></motion.div>
            </div>
        </div>
    )
}

export default ExperienceSection