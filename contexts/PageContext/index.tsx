import { createContext, useContext, useState } from "react"

const PageContext = createContext({})

export const PageProvider = ({children}: {children: React.ReactNode}) => {
    
    const [currentPage, setCurrentPage] = useState(0)
    const [previousPage, setPreviousPage] = useState(-1)
    
    const setPage = (n : number) => {
        setPreviousPage(currentPage)
        setCurrentPage(n)
    }


    return <PageContext.Provider value={{setPage, currentPage, previousPage}}>{children}</PageContext.Provider>
}

export const usePageContext = () => useContext(PageContext)