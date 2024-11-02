'use client'
import React, { useEffect, useRef, useState } from 'react'
import MoonIcon from 'remixicon-react/MoonFoggyLineIcon'
import SunIcon from 'remixicon-react/SunFoggyLineIcon'
import {reactLocalStorage} from 'reactjs-localstorage'

const Toggle = ({children}: {children: React.ReactNode}) => {
  
    const [darkTheme, setDarkTheme] = useState(false)
    const mainRef = useRef<HTMLDivElement>(null)

    const addDarkTheme = () => {

        if (!mainRef.current) return;

        mainRef.current.classList.add('dark')
        setDarkTheme(true)
    }

    const removeDarkTheme = () => {

        if (!mainRef.current) return;

        mainRef.current.classList.remove('dark')
        setDarkTheme(false)
    }

    useEffect(() => {
        const darkTheme = reactLocalStorage.get('darkTheme') as string
        const darkThemeParsed = darkTheme !== undefined && JSON.parse(darkTheme)

        if (darkThemeParsed) {
            addDarkTheme()
        } else {
            removeDarkTheme()
        }
    }, [])

    return (
    <main ref={mainRef}>
        <div
            className='bg-zinc-50 dark:bg-zinc-800'
        >
            <div
                className='max-w-[1200px] xl:w-full mx-auto flex justify-center xl:px-[90px] sm:pl-[80px] sm:pr-5 overflow-hidden'
            >
                <button
                    onClick={() => {
                        if (!darkTheme) {
                            addDarkTheme()
                            reactLocalStorage.set('darkTheme', true)
                        } else {
                            removeDarkTheme()
                            reactLocalStorage.set('darkTheme', false)
                        }
                    }}
                    className='fixed right-14 sm:right-10 top-10 text-yellow-600 hover:text-yellow-500'>
                    <span className='absolute block rounded-full bg-zinc-50 p-1 text-4xl dark:bg-zinc-800'>
                        {
                            darkTheme ? <SunIcon /> : <MoonIcon />
                        }
                    </span>
                </button>
                {children}
            </div>
        </div>
    </main>
  )
}

export default Toggle