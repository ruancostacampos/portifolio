import Image, { StaticImageData } from "next/image"

interface ProjectCardProps{
    title: string,
    description: string,
    tecnologies: string[],
    website: string,
    github?: string, 
    img: StaticImageData,
}

const ProjectCard = ({title, description, tecnologies, website, github, img}: ProjectCardProps) => {
    return (
        <div className="flex flex-col mt-4 bg-black bg-opacity-5 px-8 py-4">
            <div className="bg-black bg-opacity-15 w-fit px-2">
                <h2 className="plex-mono uppercase text-2xl">{title}</h2>
            </div>
            <Image src={img} width={1280} height={608} alt="Terraquea project image" className="w-full"/>
            <p className="plex-mono mt-4">
                {description}
            </p>
            <div className="flex flex-row mt-2 gap-2">
                {tecnologies.map((item, index) => (
                    <div key={index} className="bg-black bg-opacity-15 px-2 plex-mono">
                        <p>{item}</p>
                    </div>
                ))}
            </div>
            <div className="flex flex-row mt-2 gap-2 justify-end w-full">
                {website && 
                    <div className="bg-black bg-opacity-15 px-2 plex-mono">
                        <a href={website} target="_blank">Open website</a>
                    </div>
                }
                {github &&
                    <div className="bg-black bg-opacity-15 px-2 plex-mono ">
                        <a href={github} target="_blank">Github</a>
                    </div>
                }
                </div>
        </div>
    )
}

export default ProjectCard