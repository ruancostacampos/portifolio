'use client'

import ProjectCard from "@/components/Projects/ProjectCard"
import { usePageContext } from "@/contexts/PageContext"
import { useAnimate } from "framer-motion"
import { useEffect, useState } from "react"
import terraqueaImage from "../public/terraquea.png"
import fantasticaImage from '../public/fantasticapay.png'
import calculator from '../public/calculator.png'
import world from '../public/world.png'
import { useTranslations } from "next-intl"

const Projects = () => {

    const [scope, animate] = useAnimate()
    const {currentPage, previousPage} : any = usePageContext()
    const [notOpenStyle, setNotOpenStyle] = useState('max-h-0 max-w-0 overflow-hidden')
    const t = useTranslations('projects')

    const scrollToTop = () => {
        document.body.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    
    useEffect(() => {

        const yTimes = scope.current.getClientRects()[0].height / window.innerHeight
        
        // IF IS THE PREVIOUS PAGE
        if(currentPage !== 1 && previousPage == 1){

            // IF IS IN THE HOME PAGE
            if(currentPage == 0){
                animate(scope.current, {opacity: 0.00, scale: 2.0, zIndex: -1, y: -1.3 * yTimes * window.innerHeight}, {duration: 1, ease: "anticipate"})
                return
            }

            animate(scope.current, {opacity: 0.05, scale: 2.0, zIndex: -1, y: -1.3 * yTimes * window.innerHeight}, {duration: 1, ease: "anticipate"})
            return
        }

        //IF IS THE CURRENT PAGE
        if(currentPage == 1){
            setNotOpenStyle('')
            animate(scope.current, {opacity: 1, scale: 1, zIndex: 0, x: 0, y: 0}, {duration: 1, ease: "anticipate"})
            return
        }

        //IF INST THE PREVIOUS PAGE AND NOT THE ACTUAL PAGE
        if(currentPage !== 1 && previousPage !== 1){
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
                    title={t('project0_title')}
                    description={t('project0_description')}
                    tecnologies={['JavaScript', 'CSS', 'HTML']}
                    website="https://fantasticapay.com.br/"
                    img={fantasticaImage}
                />
                <ProjectCard 
                    title={t('project1_title')}
                    description={t('project1_description')}
                    tecnologies={['JavaScript', 'ThreeJS', 'GSAP', 'CSS', 'HTML']}
                    website="https://terraquea.com.br"
                    github="https://github.com/ruancostacampos/terraquea-coming-soon/tree/main"
                    img={terraqueaImage}
                />
                <ProjectCard 
                    title={t('project2_title')}
                    description={t('project2_description')}
                    tecnologies={['JavaScript', 'CSS', 'HTML']}
                    website="https://mundodasmaquininhas.com.br/calculadora/"
                    img={calculator}
                />
                <ProjectCard 
                    title={t('project3_title')}
                    description={t('project3_description')}
                    tecnologies={['JavaScript', 'CSS', 'HTML']}
                    website="https://mundodasmaquininhas.com.br/"
                    img={world}
                />
                <button className="px-4 py-2 bg-black bg-opacity-10 w-fit self-center mt-2 z-10" onClick={scrollToTop}>^</button>
            </div>
        </div>
    )
}

export default Projects