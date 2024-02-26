"use client";
import { useRef } from "react";

import textHoverAnimation from "@/utils/textHoverAnimation";
import { usePageContext } from "@/contexts/PageContext";

export default function Header(){

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

    return(
        
        <header className="pt-24">
            <audio ref={audioRef} src="/hover.mp3" />
            <ul className="flex gap-8 w-fit mx-auto font-bold">
                <li>
                    <a 
                        className="hover:text-red-700" 
                        onMouseEnter={(e) => {playAudio();textHoverAnimation(e);}} 
                        onMouseLeave={stopAudio}
                        onClick={() => setPage(0)}
                        href="#home"
                    >HOME_</a>
                </li>
                <li>
                    <a 
                        className="hover:text-red-700"
                        onMouseEnter={(e) => {playAudio();textHoverAnimation(e);}} 
                        onMouseLeave={stopAudio}
                        onClick={() => setPage(1)}
                        href="#projects"
                    >PROJECTS_</a>
                </li>
                <li>
                    <a 
                        className="hover:text-red-700"
                        onMouseEnter={(e) => {playAudio();textHoverAnimation(e);}} 
                        onMouseLeave={stopAudio}
                        onClick={() => setPage(3)}
                        href="#experiments" 
                    >EXPERIMENTS_</a>
                </li>
                <li>
                    <a 
                        className="hover:text-red-700"
                        onMouseEnter={(e) => {playAudio();textHoverAnimation(e);}} 
                        onMouseLeave={stopAudio}
                        onClick={() => setPage(2)}
                        href="#about"
                    >ABOUT_</a>
                </li>
            </ul>
        </header>
    )
}