"use client"

import { useRef, useState } from "react";
import cover from '@/public/elena-cover.jpg'
import Image from "next/image";

export default function MusicPlayer(){

    const audioRef = useRef<HTMLAudioElement>(null);
    const [paused, setPaused] = useState(true)

    const playAudio = () => {
        console.log(audioRef.current?.paused)
        
        if (audioRef.current?.paused) {
            audioRef.current.play()
            setPaused(false)
            console.log('tocando')
        }else{
            audioRef.current?.pause()
            setPaused(true)
        }
    }

    return (
        <div className="absolute bg-zinc-900 flex items-center gap-4 right-0">
            <Image src={cover} width={100} height={100} alt="Elena album cover"/>
            <div className="flex flex-col transition ease-in-out duration-300 pr-4 text-center">
                <p className="text-white">♫ Minerva Corp 音乐 <br></br>Long Summers</p>
                <div className="flex items-center gap-6 text-white justify-center">
                    {paused && <span className="cursor-pointer" onClick={()=> playAudio()}>ᐅ</span>}
                    {!paused && <span className="cursor-pointer" onClick={()=> playAudio()}>⏸</span>}
                </div>
            </div>
            <audio ref={audioRef} src="/longsummers.mp3" loop autoPlay={false}/>
        </div>
    )
}
