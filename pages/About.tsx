'use client'
import { usePageContext } from "@/contexts/PageContext"
import { useAnimate } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import RuanImg from "../public/ruan.jpg"
import { useTranslations } from "next-intl"

const About = () => {

    const [scope, animate] = useAnimate()
    const {currentPage, previousPage} : any = usePageContext()
    const [notOpenStyle, setNotOpenStyle] = useState('max-h-0 max-w-0 overflow-hidden')
    const t = useTranslations('about')

    useEffect(() => {
        
        const yTimes = scope.current.getClientRects()[0].height / window.innerHeight

        // IF IS THE PREVIOUS PAGE
        if(currentPage !== 2 && previousPage == 2){
            
            // IF IS IN THE HOME PAGE
            if(currentPage == 0){
                animate(scope.current, {opacity: 0.00, scale: 2.0, zIndex: -1, y: -1.3 * yTimes * document.body.clientHeight}, {duration: 1, ease: "anticipate"})
                return
            }

            animate(scope.current, {opacity: 0.03, scale: 2.0, zIndex: -1, y: -1.3 * yTimes * document.body.clientHeight}, {duration: 1, ease: "anticipate"})
            return
        }

        //IF IS THE CURRENT PAGE
        if(currentPage == 2){
            setNotOpenStyle('')
            animate(scope.current, {opacity: 1, scale: 1, zIndex: 0, x: 0, y: 0}, {duration: 1, ease: "anticipate"})
            return
        }

        //IF INST THE PREVIOUS PAGE AND NOT THE ACTUAL PAGE
        if(currentPage !== 2 && previousPage !== 2){
            animate(scope.current, {opacity: 0.05, x: -2 * document.body.clientWidth}, {duration: 1, ease: "anticipate"})
            return
        }

    }, [currentPage])

    return (
        <div ref={scope} className={`mx-auto flex flex-column justify-center items-center mt-8 absolute top-0 plex-mono w-full max-w-5xl ${notOpenStyle}`}>
            <div className="w-full">
                <h1 className="plex-mono  text-5xl max-w-sm uppercase">{t('name')}</h1>
                <div className="h-[4px] w-full bg-red-700 my-4"></div>
                <div className="bg-gray-500 bg-opacity-50 w-full flex flex-col lg:flex-row gap-4 h-fit rounded mb-4">
                    <Image className="object-cover self-center mt-4 lg:mt-0 lg:self-auto" src={RuanImg} width={300} height={300} alt="A picture of Ruan Costa" />
                    <div className="flex flex-col h-full p-3 pl-4">
                        <p className="plex-mono">{t('description')}</p>
                        <div className="flex flex-row flex-wrap justify-end w-full pt-4 gap-4 plex-mono h-full">
                            <div className="text-right plex-mono bg-neutral-800 bg-opacity-70 rounded px-4 py-2 hover:bg-slate-50 hover:text-black w-fit text-gray-50">
                                <a href="https://github.com/ruancostacampos" target="_blank">github</a>
                            </div>
                            <div className="text-right plex-mono bg-neutral-800 bg-opacity-70 rounded px-4 py-2 hover:bg-slate-50 hover:text-black w-fit text-gray-50">
                                <a href="https://linkedin.com/in/ruancostacampos" target="_blank">linkedin</a>
                            </div>
                            <div className="text-right plex-mono bg-neutral-800 bg-opacity-70 rounded px-4 py-2 hover:bg-slate-50 hover:text-black w-fit text-gray-50">
                                <a href="https://wa.me/5577991882211" target="_blank">whatsapp</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-end gap-2 flex-wrap">
                    <p className="text-right plex-mono w-fit bg-gray-500 bg-opacity-50 rounded px-4 py-2">Github repos: <span className="bg-neutral-800 bg-opacity-70 px-2 rounded text-gray-50">36</span></p>
                    <p className="text-right plex-mono w-fit bg-gray-500 bg-opacity-50 rounded px-4 py-2">Freelances: <span className="bg-neutral-800 bg-opacity-70 px-2 rounded text-gray-50">6</span></p>
                </div>
            </div>
        </div>
    )
}

export default About