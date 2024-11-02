import Image from "next/image"
import Heading from "./sub/Heading"
import Achievements from "./sub/Achievements"
import GithubFillIcon from 'remixicon-react/GithubFillIcon'
import Projector2LineIcon from 'remixicon-react/Projector2LineIcon'
import GroupLineIcon from 'remixicon-react/GroupLineIcon'
import AwardFillIcon from 'remixicon-react/AwardFillIcon'
import ArrowLeft from 'remixicon-react/ArrowLeftSFillIcon'
import DownloadLineIcon from 'remixicon-react/DownloadLineIcon'


const aboutData = [
  {
    title: 'Github Repos',
    amount: 348,
    icon: <GithubFillIcon />
  },
  {
    title: 'Successful Projects',
    amount: 227,
    icon: <Projector2LineIcon />
  },
  {
    title: 'Sastified clients',
    amount: 176,
    icon: <GroupLineIcon />
  },
  {
    title: 'Awards and Recognition',
    amount: 107,
    icon: <AwardFillIcon />
  }
]

const AboutSection = () => {
  return (
    <div id="about" className="min-h-screen px-72 flex flex-col items-center justify-center">
        <Heading text="About me" />
        <div className="w-full flex items-center justify-between sm:justify-center gap-10">
            <Image src='/zoro.png' alt="about me" width={400} height={400} className="w-[220px] lg:w-[200px] md:hidden"/>
            <div className="relative max-w-[800px] rounded-xl bg-zinc-100 p-5 dark:bg-zinc-800 dark:border">
                <span className="absolute -left-5 top-10 scale-[2.5] text-zinc-100 md:hidden"><ArrowLeft /></span>
                <p className="text-lg font-light text-gray-700 first-letter:pl-3 lg:text-[16px] sm:text-[14px] dark:text-white">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to  survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <a href="/HuynhMinhHai-CV.pdf" download className="w-max flex items-center gap-x-1 mt-6 rounded-full border border-gray-300 bg-red-400 px-3 py-2 text-white hover:bg-red-500 transition-all">
                    <span>Download</span>
                    <span className="scale-[0.7]"><DownloadLineIcon /></span>
                </a>
            </div>
        </div>
        <div className="mt-20 w-full flex flex-wrap items-center justify-between gap-x-7 gap-y-10">
          {
            aboutData.map((item) => (
              <Achievements key={item.title} item={item} />
            ))
          }
        </div>
    </div>
  )
}

export default AboutSection