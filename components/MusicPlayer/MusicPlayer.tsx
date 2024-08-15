"use client"

import { useRef } from "react";

export default function MusicPlayer(){

    const audioRef = useRef<HTMLAudioElement>(null);

    return (
        <div className="absolute left-0 top-0 ">
            <audio ref={audioRef} src="/hover.mp3" />
        </div>
    )
}