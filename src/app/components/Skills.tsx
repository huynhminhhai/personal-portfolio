'use client'
import Image from "next/image"
import Heading from "./sub/Heading"
import {motion} from 'framer-motion'

const skillData = [
    {
        name: 'Html',
        icon: '/html1.webp'
    },
    {
        name: 'Css',
        icon: '/css.png'
    },
    {
        name: 'Javascript',
        icon: '/js.png'
    },
    {
        name: 'Bootstrap',
        icon: '/bootstrap.png'
    },
    {
        name: 'Jquery',
        icon: '/jquery.svg'
    },
    {
        name: 'TypeScript',
        icon: '/ts.png'
    },
    {
        name: 'ReactJS',
        icon: '/reactjs.webp'
    },
    {
        name: 'NextJS',
        icon: '/nextjs.png'
    },
    {
        name: 'TailwindCss',
        icon: '/tw.png'
    },
    {
        name: 'Material UI',
        icon: '/mui1.png'
    },
    {
        name: 'Framer Motion',
        icon: '/framer.png'
    },
    {
        name: 'Github',
        icon: '/github.png'
    },
    {
        name: 'VS Code',
        icon: '/vscode.svg'
    },
    {
        name: 'PostMan',
        icon: '/postman.svg'
    },
]

const SkillsSection = () => {

    const variants = {
        visible: (i:number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3 + i * 0.07,
            },

        }),
        hidden: {
            opacity: 0,
            y: 30
        }
    }

  return (
    <div id="skill" className="min-h-screen flex flex-col items-center justify-center gap-y-0 px-80">
        <Heading text="Skills" />
        <div className="w-full flex justify-around flex-wrap gap-x-4 gap-y-4">
            {
                skillData.map((item, i) => (
                    <motion.div
                        custom={i}
                        variants={variants}
                        initial='hidden'
                        whileInView='visible'
                        whileHover={{scale: 1.1}}
                        viewport={{margin: '50px', once: true}}
                        key={i}
                        className="flex items-center justify-center gap-x-3 rounded-xl border border-yellow-500 bg-zinc-100 px-5 py-2 lg:px-2">
                        <Image src={item.icon} alt="skill image" width={80} height={80} className="h-auto w-[40px] object-contain" />
                        <p className="text-sm text-gray-600">{item.name}</p>
                    </motion.div>

                ))
            }
        </div>
    </div>
  )
}

export default SkillsSection