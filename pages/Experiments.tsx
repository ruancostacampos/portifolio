import { useAnimate } from "framer-motion"
import { useEffect, useState } from "react"
import { usePageContext } from "@/contexts/PageContext"
import ProjectCard from "@/components/Projects/ProjectCard"

const Experiments = () => {

    const [scope, animate] = useAnimate()
    const {currentPage, previousPage} : any = usePageContext()
    const [notOpenStyle, setNotOpenStyle] = useState('max-h-0 max-w-0 overflow-hidden')

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    
    useEffect(() => {

        const yTimes = -(scope.current.getClientRects()[0].height - 120) / document.body.clientHeight - 0.3
        
        // IF IS THE PREVIOUS PAGE
        if(currentPage !== 3 && previousPage == 3){

            // IF IS IN THE HOME PAGE
            if(currentPage == 0){
                animate(scope.current, {opacity: 0.00, scale: 2.0, zIndex: -1, y: yTimes * document.body.clientHeight}, {duration: 1, ease: "anticipate"})
                return
            }

            animate(scope.current, {opacity: 0.03, scale: 2.0, zIndex: -1, y: yTimes * document.body.clientHeight}, {duration: 1, ease: "anticipate"})
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
                <h1 className="plex-mono  text-5xl max-w-sm">EXPERIMENTS_</h1>
                <div className="h-[4px] w-full bg-red-700 my-4"></div>
                <div className="h-fit p-3 bg-gray-500 bg-opacity-50">
                    <p className="plex-mono w-full text-md">
                    Conducting experimental web endeavors, Ive explored the realms of Three.js, 
                    JavaScript, CSS, and HTML to create innovative and immersive 3D web experiences. 
                    These projects showcase my commitment to pushing the boundaries and experimenting 
                    with cutting-edge technologies in the web development landscape.
                    </p>
                </div>
                <ProjectCard 
                    title="00_Raycast"
                    description="Learning raycast in my project using Three.js, 
                    JavaScript, CSS, and HTML. Hover over each cube to witness dynamic movement, 
                    simulating an engaging and intuitive selection interaction."
                    tecnologies={['JavaScript', 'ThreeJS',]}
                    website="https://ruancostacampos.github.io/three-js-experiment/"
                    github="https://github.com/ruancostacampos/three-js-experiment/"
                    video="/raycast.webm"
                />
                <ProjectCard 
                    title="01_Custom_Slider"
                    description="Learning raycast in my project using Three.js, 
                    JavaScript, CSS, and HTML. Hover over each cube to witness dynamic movement, 
                    simulating an engaging and intuitive selection interaction."
                    tecnologies={['React', 'GSAP',]}
                    website="https://ruancostacampos.github.io/three-js-experiment/"
                    github="https://github.com/ruancostacampos/three-js-experiment/"
                    video="/terraquea_menu.webm"
                />
                <button className="px-4 py-2 bg-black bg-opacity-10 w-fit self-center mt-2" onClick={scrollToTop}>^</button>
            </div>
        </div>
    )
}

export default Experiments