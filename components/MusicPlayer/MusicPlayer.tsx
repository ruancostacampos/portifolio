"use client"

import { useRef } from "react";
import cover from '@/public/elena-cover.jpg'
import Image from "next/image";

export default function MusicPlayer(){

    const audioRef = useRef<HTMLAudioElement>(null);

    const playAudio = () => {

        if (audioRef.current) {
          audioRef.current.play()
        }

    }

    const pauseAudio = () => {
        
        if (audioRef.current) {
          audioRef.current.pause();
        }

    }

    return (
        <div className="absolute bg-zinc-900 p-4 flex items-center gap-4">
            <Image src={cover} width={100} height={100} alt="Elena album cover"/>
            <div className="flex flex-col">
                <p className="text-white">♫ Minerva Corp 音乐 <br></br>Long Summers</p>
                <div className="flex items-center gap-6 text-white justify-center">
                    <span className="cursor-pointer" onClick={()=> playAudio}>ᐅ</span>
                    <span className="cursor-pointer" onClick={()=> pauseAudio}>⏸</span>
                </div>
            </div>
            <audio ref={audioRef} src="/longsummers.mp3" loop/>
        </div>
    )
}