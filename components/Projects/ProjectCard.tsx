import Image, { StaticImageData } from "next/image"

interface ProjectCardProps {
    title: string,
    description: string,
    tecnologies: string[],
    website: string,
    github?: string,
    img?: StaticImageData,
    video?: string,
}

const ProjectCard = ({ title, description, tecnologies, website, github, img, video }: ProjectCardProps) => {
    return (
        <div className="flex flex-col mt-4 py-4 rounded">
            <div className="w-fit px-2">
                <h2 className="plex-mono uppercase text-2xl">{title}</h2>
                <div className="h-[4px] w-full bg-red-700 mt-2"></div>
            </div>
            <div className=" bg-gray-500 bg-opacity-50 flex flex-col xl:flex-row mt-4 rounded xl:h-80">
                {img && <Image src={img} width={1280} height={608} alt="Terraquea project image" className="xl:w-1/2 w-full xl:rounded-l-md object-cover rounded-t xl:rounded-t-none" />}
                {video && 
                    (<video className="xl:w-1/2 w-full xl:rounded-l-md object-cover rounded-t xl:rounded-t-none" autoPlay loop muted>
                        <source src={video} type="video/webm" />
                    </video>
                )}
                <div className="flex flex-col h-full">
                    <p className="plex-mono p-4 bg-neutral-800 bg-opacity-70 text-gray-100 xl:rounded-tr-md">
                        {description}
                    </p>
                    <div className="flex flex-row mt-2 gap-2 p-4 flex-wrap">
                        {tecnologies.map((item, index) => (
                            <div key={index} className="bg-neutral-800 bg-opacity-70 p-2 plex-mono rounded-md">
                                <p className="text-gray-100">{item}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-row mt-2 gap-2 justify-end w-full p-4 h-full">
                        <div className="flex gap-4 self-end flex-row-reverse">
                        {website &&
                            <a href={website} target="_blank" className="bg-neutral-800 bg-opacity-80 text-gray-100 px-2 plex-mono p-2 rounded hover:bg-slate-50 hover:text-black">
                                Open website
                            </a>
                        }
                        {github &&
                            <a href={github} target="_blank" className="bg-neutral-800 bg-opacity-80 text-gray-100 px-2 plex-mono p-2 rounded hover:bg-slate-50 hover:text-black">
                                Github
                            </a>
                        }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProjectCard