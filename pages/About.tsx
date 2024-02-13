import { usePageContext } from "@/contexts/PageContext"
import { useAnimate } from "framer-motion"
import { useEffect } from "react"

const About = () => {

    const [scope, animate] = useAnimate()
    const {currentPage, previousPage} : any = usePageContext()

    useEffect(() => {
        
        // IF IS THE PREVIOUS PAGE
        if(currentPage !== 2 && previousPage == 2){
            animate(scope.current, {opacity: 0.05, scale: 2.0, zIndex: -1, y:-2100}, {duration: 1, ease: "anticipate"})
            return
        }

        //IF IS THE CURRENT PAGE
        if(currentPage == 2){
            animate(scope.current, {opacity: 1, scale: 1, zIndex: 0, x: 0, y: 0}, {duration: 1, ease: "anticipate"})
            return
        }

        //IF INST THE PREVIOUS PAGE AND NOT THE ACTUAL PAGE
        if(currentPage !== 2 && previousPage !== 2){
            animate(scope.current, {opacity: 0.05, x: -2 * document.body.clientWidth}, {duration: 1, ease: "anticipate"})
        }

    }, [currentPage])

    return (
        <div ref={scope} className="mx-auto flex flex-column justify-center items-center mt-8">
            About
        </div>
    )
}

export default About