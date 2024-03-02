"use client";
import { useEffect, useRef, useState } from "react";

import textHoverAnimation from "@/utils/textHoverAnimation";
import { usePageContext } from "@/contexts/PageContext";

export default function Header(){

    const [isOpen, setIsOpen] = useState(false)
    const [customStyle, setCustomStyle] = useState('')
    const {setPage} : any = usePageContext()

    const audioRef = useRef<HTMLAudioElement>(null);

    const playAudio = () => {

        if (audioRef.current) {
          audioRef.current.play();
        }

    };

    const stopAudio = () => {
        
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }

    };

    const handleClick = () => {

        // IF IS IN MOBILE MENU
        if(window.innerWidth < 768){ 
            setCustomStyle('hidden')
        }
    }

    const handleOpen = () => {
        setCustomStyle('')
        setIsOpen(!isOpen)
    }

    useEffect( () => {
        
        const handleResize = () => {
            
            if(window.innerWidth > 768){ 
                setCustomStyle('')
            }

            if(window.innerWidth < 768){ 
                console.log("escondendo handleResize")
                setCustomStyle('hidden')
            }

        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])

    return(
        
        <header className="pt-24 z-10">
            <div className="absolute right-8 top-8 md:hidden text-4xl cursor-pointer" onClick={handleOpen}>
                =
            </div>
            <audio ref={audioRef} src="/hover.mp3" />
                <ul className={`flex flex-col absolute bg-zinc-200 left-0 top-0 w-screen h-screen justify-center items-center md:w-fit md:bg-transparent md:h-auto md:relative md:flex-row gap-8 mx-auto font-bold transition-all ${customStyle}`}>
                <li>
                    <a 
                        className="hover:text-red-700" 
                        onMouseEnter={(e) => {
                            playAudio()
                            textHoverAnimation(e)
                        }} 
                        onMouseLeave={stopAudio}
                        onClick={() => {
                            setPage(0)
                            handleClick()
                        }}
                        href="#home"
                    >HOME_</a>
                </li>
                <li>
                    <a 
                        className="hover:text-red-700"
                        onMouseEnter={(e) => {playAudio();textHoverAnimation(e);}} 
                        onMouseLeave={stopAudio}
                        onClick={() => {
                            setPage(1)
                            handleClick()
                        }}
                        href="#projects"
                    >PROJECTS_</a>
                </li>
                <li>
                    <a 
                        className="hover:text-red-700"
                        onMouseEnter={(e) => {playAudio();textHoverAnimation(e);}} 
                        onMouseLeave={stopAudio}
                        onClick={() => {
                            setPage(3)
                            handleClick()
                        }}
                        href="#experiments" 
                    >EXPERIMENTS_</a>
                </li>
                <li>
                    <a 
                        className="hover:text-red-700"
                        onMouseEnter={(e) => {playAudio();textHoverAnimation(e);}} 
                        onMouseLeave={stopAudio}
                        onClick={() => {
                            setPage(2)
                            handleClick()
                        }}
                        href="#about"
                    >ABOUT_</a>
                </li>
            </ul>
        </header>
    )
}