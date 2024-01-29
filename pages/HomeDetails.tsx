import ModelViewer from "../components/Home/ModelViewer"

const HomeDetails = () => {
    return  (
        <div className="mx-auto flex flex-column justify-center items-center mt-16">
            <ModelViewer />         
            <div className="mx-auto max-w-lg">
            <div>
                <h1 className="plex-mono  text-5xl max-w-sm">AESTHETIC WEBSITES</h1>
            </div>
                <div className="h-[4px] w-full bg-red-700 my-8"></div>
                <p className="plex-mono text-xl">I’m Ruan Costa, a FullStack Dev based in Brazil. Working as freelancer with Node, ReactJS and NextJS, ThreeJS, and GSAP we can create great and newexperiences in the web.</p>
            </div>
        </div>
    )
}

export default HomeDetails