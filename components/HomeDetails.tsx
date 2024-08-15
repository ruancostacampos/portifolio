'use client'

import { useEffect, useLayoutEffect, useState } from "react"
import ModelViewer from "./Home/ModelViewer"
import {useAnimate } from "framer-motion"
import { usePageContext } from "@/contexts/PageContext"
import { useTranslations } from "next-intl"

type HomeProps = {
    texts: any,
}

const variants = {
    initialState: { opacity: 0 },
    animateState: { opacity: 1 },
    exitState: {},
}


const HomeDetails = () => {

    const [scope, animate] = useAnimate()
    const {currentPage, previousPage} : any = usePageContext()
    const t = useTranslations('home')

    useEffect(() => {

        // IF IS THE PREVIOUS PAGE
        if(currentPage !== 0 && previousPage == 0){
            animate(scope.current, {opacity: 0.05, scale: 2.0, zIndex: -1, y: -200}, {duration: 1, ease: "anticipate"})
            return
        }

        //IF IS THE CURRENT PAGE
        if(currentPage == 0){
            animate(scope.current, {opacity: 1, scale: 1, zIndex: 0, x: 0, y: 0}, {duration: 1, ease: "anticipate"})
            return
        }

        //IF INST THE PREVIOUS PAGE AND NOT THE ACTUAL PAGE
        if(currentPage !== 0 && previousPage !== 0){
            animate(scope.current, {opacity: 0.05, x: -2 * document.body.clientWidth, y: -200}, {duration: 1, ease: "anticipate"})
        }

    }, [currentPage])


    return (
        <div ref={scope} className="mx-auto flex flex-col md:flex-row justify-center items-center top-0">
            <ModelViewer/>
            <div className="mx-auto max-w-lg px-8 md:p-0 pb-6">
                <div>
                    <h1 className="plex-mono  text-5xl max-w-sm text-center md:text-left">AESTHETIC WEBSITES</h1>
                </div>
                <div className="h-[4px] w-full bg-red-700 my-8"></div>
                <p className="plex-mono text-xl">{t('text')}</p>
            </div>
        </div>)
}

export default HomeDetails