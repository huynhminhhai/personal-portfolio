'use client'
import { useEffect, useRef, useState } from "react"
import Heading from "./sub/Heading"
import Project from "./sub/Project"
import { animate, motion } from "framer-motion"

const projectButton = [
    'All',
    'Vanilla',
    'ReactJS',
    'NextJS',
    'TaiwindCss',
    'MUI',
    'Bootstrap'
]

const projectData = [
    {
        name: 'hoanmy.com',
        desc: '...',
        bg: '/hoanmy.png',
        tech: ['Vanilla', 'Bootstrap']
    },
    {
        name: 'primahealth.vn',
        desc: '...',
        bg: '/prima.png',
        tech: ['Vanilla', 'Bootstrap']
    },
    {
        name: 'Toyota Sure',
        desc: '...',
        bg: '/toyota-sure.png',
        tech: ['Vanilla', 'Bootstrap']
    },
    {
        name: 'Thaco Auto CMS',
        desc: '...',
        bg: '/cm3.webp',
        tech: ['NextJS', 'MUI']
    },
    {
        name: "The company's ERP",
        desc: '...',
        bg: '/cms2.jpg',
        tech: ['ReactJS']
    },
]

const ProjectsSection = () => {

    const [tech, setTech] = useState<string>('All')
    const [index, setIndex] = useState<number>(0)
    const prevIndex  = useRef(0)
    const buttonRef = useRef<HTMLButtonElement[]>([])

    const handleClickType = () => {
        animate(buttonRef.current[prevIndex.current], {opacity: 0.5, scale: 1})
        animate(buttonRef.current[index], {opacity: 1, scale: 1.2})
    }

    useEffect(() => {
        handleClickType()
        prevIndex.current = index
    }, [index])
 
  return (
    <div className="min-h-screen py-20 px-80">
        <Heading text="Projects" />
        <div className="flex flex-wrap items-center justify-start gap-4 py-10">
            {
                projectButton.map((item, i) => (
                    <motion.button
                        ref={(el) => { if (el) buttonRef.current.push(el); }}
                        onClick={() => {setIndex(i); setTech(item)}}
                        key={i}
                        initial={{opacity: i === 0 ? 1 : 0.5, scale: i === 0 ? 1.2 : 1}}
                        className="border border-yellow-500 rounded-xl px-2 py-1 text-sm font-light tracking-wider text-gray-400"
                    >{item}</motion.button>
                ))
            }
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5">
            {
                projectData.filter((project) => {
                    return project.tech.some((te) => (tech === 'All' ? true : te === tech))
                }).map((item, i) => (
                    <motion.div key={i}>
                        <Project project={item} index={i} />
                    </motion.div>
                ))
            }
        </div>
    </div>
  )
}

export default ProjectsSection