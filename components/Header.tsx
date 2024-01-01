"use client";
import { useRef } from "react";

import textHoverAnimation from "@/utils/textHoverAnimation";

export default function Header(){

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
        
        <header className="pt-16">
            <audio ref={audioRef} src="/hover.mp3" />
            <ul className="flex gap-8 w-fit mx-auto font-bold">
                <li>
                    <a  
                        onMouseEnter={(e) => {playAudio();textHoverAnimation(e);}} 
                        onMouseLeave={stopAudio}
                        href="#home"
                    >HOME_</a>
                </li>
                <li>
                    <a 
                        onMouseEnter={(e) => {playAudio();textHoverAnimation(e);}} 
                        onMouseLeave={stopAudio}
                        href="#projects"
                    >PROJECTS_</a>
                </li>
                <li>
                    <a 
                        onMouseEnter={(e) => {playAudio();textHoverAnimation(e);}} 
                        onMouseLeave={stopAudio}
                        href="#about"
                    >ABOUT_</a>
                </li>
                <li>
                    <a 
                        onMouseEnter={(e) => {playAudio();textHoverAnimation(e);}} 
                        onMouseLeave={stopAudio}
                        href="#experiments"
                    >EXPERIMENTS_</a>
                </li>
            </ul>
        </header>
    )
}