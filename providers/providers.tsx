'use client'

import { PageProvider } from "@/contexts/PageContext"

export const Providers = ({children} : {children : React.ReactNode}) => {
    return(
        <PageProvider>
            {children}
        </PageProvider>
    )
}