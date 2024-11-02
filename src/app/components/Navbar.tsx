'use client'
import Home5LineIcon from 'remixicon-react/Home5LineIcon'
import UserLineIcon from 'remixicon-react/UserLineIcon'
import HistoryLineIcon from 'remixicon-react/HistoryLineIcon'
import BriefcaseLineIcon from 'remixicon-react/BriefcaseLineIcon'
import ProjectLineIcon from 'remixicon-react/ProjectorLineIcon'

const navbarData = [
    {
        id: 'home',
        name: 'Home',
        icon: <Home5LineIcon />
    },
    {
        id: 'about',
        name: 'About',
        icon: <UserLineIcon />
    },
    {
        id: 'exp',
        name: 'Experience',
        icon: <HistoryLineIcon />
    },
    {
        id: 'skill',
        name: 'Skills',
        icon: <BriefcaseLineIcon />
    },
    {
        id: 'project',
        name: 'Projects',
        icon: <ProjectLineIcon />
    },
]

const Navbar = ({id}: {id: string}) => {
  return (
    <div className="w-[70] h-full fixed left-0 top-0 flex flex-col justify-between border-r border-gray-200 px-4 py-10 z-20">
        <a href="/#home">
            <span className="text-3xl font-semibold text-red-400">H</span>.<span className="block w-min rotate-90 origin-bottom text-[12px] font-semibold dark:text-white">MinhHai</span>
        </a>
        <div className="flex flex-col gap-y-3 sm:gap-y-2">
            {
                navbarData.map((item) => (
                    <a href={`/#${item.id}`} className="group flex flex-col items-center gap-y-2" key={item.id}>
                        <span
                            className={`text-2xl group-hover:scale-125 transition-all ${item.id === id ? 'text-red-500' : 'text-yellow-500'}`}
                        >{item.icon}</span>
                        <span className={`text-[10px] tracking-wide -translate-y-1 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-center dark:text-white ${item.id === id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>{item.name}</span>
                    </a>
                ))
            }
        </div>
        <div className="flex items-center justify-center text-[13px] text-gray-500 dark:text-white mt-6">
            <div className="absolute left-1/2 ml-4 w-max flex items-center -rotate-90 origin-bottom-left tracking-wider flex-col">
                <span>© 2024</span>
                <span className='text-[10px]'>cover by Code And Create</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar