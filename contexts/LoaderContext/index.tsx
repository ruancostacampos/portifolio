import { createContext, useContext, useState } from "react"

const LoaderContext = createContext({})

export const LoaderProvider = ({children}: {children: React.ReactNode}) => {
    
    const [isModelLoaded, setIsModelLoaded] = useState(false)
    
    const setModelLoaded = (b : boolean) => {
        setIsModelLoaded(b)
    }


    return <LoaderContext.Provider value={{isModelLoaded, setModelLoaded}}>{children}</LoaderContext.Provider>
}

export const useLoaderContext = () => useContext(LoaderContext)