import { usePageContext } from "@/contexts/PageContext"
import { useAnimate } from "framer-motion"
import Image from "next/image"
import { useEffect } from "react"
import RuanImg from "../public/ruan.jpg"

const About = () => {

    const [scope, animate] = useAnimate()
    const {currentPage, previousPage} : any = usePageContext()

    useEffect(() => {
        
        // IF IS THE PREVIOUS PAGE
        if(currentPage !== 2 && previousPage == 2){
            animate(scope.current, {opacity: 0.05, scale: 2.0, zIndex: -1, y:-200}, {duration: 1, ease: "anticipate"})
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
        <div ref={scope} className="mx-auto flex flex-column justify-center items-center mt-8 absolute top-0 plex-mono w-full">
            <div className="w-full">
                <h1 className="plex-mono  text-5xl max-w-sm">ABOUT ME</h1>
                <div className="h-[4px] w-full bg-red-700 my-4"></div>
                <div className="bg-black bg-opacity-10 w-full flex flex-row items-center gap-4">
                    <Image src={RuanImg} width={300} height={300} alt="A picture of Ruan Costa" />
                    <div className="h-fit p-3">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About