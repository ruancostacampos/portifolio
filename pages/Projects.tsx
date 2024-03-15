import ProjectCard from "@/components/Projects/ProjectCard"
import { usePageContext } from "@/contexts/PageContext"
import { useAnimate } from "framer-motion"
import { useEffect, useState } from "react"
import terraqueaImage from "../public/terraquea.png"
import fantasticaImage from '../public/fantasticapay.png'
import calculator from '../public/calculator.png'
import world from '../public/world.png'

const Projects = () => {

    const [scope, animate] = useAnimate()
    const {currentPage, previousPage} : any = usePageContext()
    const [notOpenStyle, setNotOpenStyle] = useState('max-h-0 max-w-0 overflow-hidden')

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
                <h1 className="plex-mono  text-5xl max-w-sm">PROJECTS_</h1>
                <div className="h-[4px] w-full bg-red-700 my-4"></div>
                <div className="h-fit p-3 bg-gray-500 bg-opacity-50">
                    <p className="plex-mono w-full text-md">
                        Below are some of the key projects that Ive worked on, each reflecting my 
                        passion for creating engaging and responsive web experiences.
                    </p>
                </div>
                <ProjectCard 
                    title="FantasticaPay"
                    description="FantasticaPay.com.br is an online platform for the sale of credit card machines, 
                    crafted using JavaScript, CSS, and HTML."
                    tecnologies={['JavaScript', 'CSS', 'HTML']}
                    website="https://fantasticapay.com.br/"
                    img={fantasticaImage}
                />
                <ProjectCard 
                    title="Terraquea"
                    description="Natural products website, crafted with JavaScript, ThreeJS, GSAP, CSS, HTML. 
                    The main goal was to create an immersive experience for a coming soon page."
                    tecnologies={['JavaScript', 'ThreeJS', 'GSAP', 'CSS', 'HTML']}
                    website="https://terraquea.com.br"
                    github="https://github.com/ruancostacampos/terraquea-coming-soon/tree/main"
                    img={terraqueaImage}
                />
                <ProjectCard 
                    title="Credit Card Taxes Calculator"
                    description="Introducing a bespoke credit card fee calculator tailored to the user's rates, utilized for precise loan calculations and financial planning."
                    tecnologies={['JavaScript', 'CSS', 'HTML']}
                    website="https://mundodasmaquininhas.com.br/calculadora/"
                    img={calculator}
                />
                <ProjectCard 
                    title="World Of Card Machines"
                    description="Designed and developed the 'World of Card Machines' website, offering diverse options with transparent rates, 
                    zero PIX fees, and exclusive discounts for informed payment choices."
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