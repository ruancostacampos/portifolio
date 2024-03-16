'use client'

import { useAnimate } from "framer-motion"
import { useEffect, useState } from "react"
import { usePageContext } from "@/contexts/PageContext"
import ProjectCard from "@/components/Projects/ProjectCard"
import { useTranslations } from "next-intl"

const Experiments = () => {

    const [scope, animate] = useAnimate()
    const {currentPage, previousPage} : any = usePageContext()
    const [notOpenStyle, setNotOpenStyle] = useState('max-h-0 max-w-0 overflow-hidden')
    const t = useTranslations('experiments')

    const scrollToTop = () => {
        document.body.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    
    useEffect(() => {

        const yTimes = scope.current.getClientRects()[0].height / window.innerHeight
        
        // IF IS THE PREVIOUS PAGE
        if(currentPage !== 3 && previousPage == 3){

            // IF IS IN THE HOME PAGE
            if(currentPage == 0){
                animate(scope.current, {opacity: 0, scale: 2.0, zIndex: -1, y: -1.3 * yTimes * window.innerHeight}, {duration: 1, ease: "anticipate"})
                return
            }

            animate(scope.current, {opacity: 0.05, scale: 2.0, zIndex: -1, y: -1.3 * yTimes * window.innerHeight}, {duration: 1, ease: "anticipate"})
            return
        }

        //IF IS THE CURRENT PAGE
        if(currentPage == 3){
            setNotOpenStyle('')
            animate(scope.current, {opacity: 1, scale: 1, zIndex: 0, x: 0, y: 0}, {duration: 1, ease: "circInOut"})
            return
        }

        //IF INST THE PREVIOUS PAGE AND NOT THE ACTUAL PAGE
        if(currentPage !== 3 && previousPage !== 3){
            animate(scope.current, {opacity: 0.05, x: -2 * document.body.clientWidth}, {duration: 1, ease: "anticipate"})
        }

    }, [currentPage])

    return(
        
        <div ref={scope} className={`mx-auto flex flex-col justify-center items-center mt-4 w-full absolute top-0 ${notOpenStyle}`}>
            <div className="flex flex-col mt-8 ">    
                <h1 className="plex-mono  text-5xl max-w-sm uppercase">{t('name')}</h1>
                <div className="h-[4px] w-full bg-red-700 my-4"></div>
                <div className="h-fit p-3 bg-gray-500 bg-opacity-50">
                    <p className="plex-mono w-full text-md">{t('description')}</p>
                </div>
                <ProjectCard 
                    title={t('experiment0_title')}
                    description={t('experiment0_description')}
                    tecnologies={['JavaScript', 'ThreeJS',]}
                    website="https://ruancostacampos.github.io/three-js-experiment/"
                    github="https://github.com/ruancostacampos/three-js-experiment/"
                    video="/raycast.webm"
                />
                <ProjectCard 
                    title={t('experiment1_title')}
                    description={t('experiment1_description')}
                    tecnologies={['React', 'GSAP',]}
                    website="https://terraquea2.vercel.app/"
                    github="https://github.com/ruancostacampos/terraquea2"
                    video="/terraquea_menu.webm"
                />
                <ProjectCard 
                    title={t('experiment2_title')}
                    description={t('experiment2_description')}
                    tecnologies={['JavaScript', 'HTML',]}
                    website="https://ruancostacampos.github.io/changing-char-animation/"
                    github="https://github.com/ruancostacampos/changing-char-animation"
                    video="/wordAnimation.webm"
                />
                <ProjectCard 
                    title={t('experiment3_title')}
                    description={t('experiment3_description')}
                    tecnologies={['JavaScript', 'CSS', 'HTML']}
                    website="https://ruancostacampos.github.io/oman-quiz/"
                    github="https://github.com/ruancostacampos/oman-quiz"
                    video="/omanQuiz.webm"
                />
                <button className="px-4 py-2 bg-black bg-opacity-10 w-fit self-center mt-2" onClick={scrollToTop}>^</button>
            </div>
        </div>
    )
}

export default Experiments