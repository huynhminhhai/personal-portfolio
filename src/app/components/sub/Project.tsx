import Image from 'next/image'
import {motion} from 'framer-motion'
import { useState } from 'react'

interface projectType {
    name: string,
    desc: string,
    bg: string,
    tech: string[]
}

const Project = ({project, index}: {project: projectType, index: number}) => {

    const [show, setShow] = useState(false)

  return (
    <motion.div
        initial={{opacity: 0, y: index % 2 === 0 ? 100 : -100}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 1, type: 'spring', stiffness: 100, }}
        onClick={() => setShow(!show)}
        className='relative w-[350px] h-[160px] object-cover sm:w-full border border-yellow-400 rounded-lg cursor-pointer overflow-hidden'
    >
        <Image
            src={project.bg}
            alt='hoanmy.com'
            width={400}
            height={400}
            className='rounded-lg opacity-90'
        />
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: show ? 1 : 0}}
            className='absolute top-0 w-full h-full flex flex-col items-center justify-center gap-y-2 bg-white/95 p-6 rounded-lg'
        >
            <h2 className='text-lg tracking-wide text-gray-500'>{project.name}</h2>
            <p className='text-gray-500 text-justify first-letter:pl-2'>{project.desc}</p>
        </motion.div>
    </motion.div>
  )
}

export default Project