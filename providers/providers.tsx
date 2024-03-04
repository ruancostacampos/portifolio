'use client'

import { LoaderProvider } from "@/contexts/LoaderContext"
import { PageProvider } from "@/contexts/PageContext"

export const Providers = ({children} : {children : React.ReactNode}) => {
    return(
        <PageProvider>
            <LoaderProvider>
                {children}
            </LoaderProvider>
        </PageProvider>
    )
}