"use client"

import HomeDetails from '@/pages/HomeDetails'
import Header from '../components/Header/Header'
import About from '@/pages/About'
import { useState } from 'react'
import { usePageContext } from '@/contexts/PageContext'
import Projects from '@/pages/Projects'
import Experiments from '@/pages/Experiments'

export default function Home() {

  const {currentPage} : any = usePageContext()
  
  return (
    <>
      <Header />
        <main className="flex flex-column justify-center items-center mx-auto relative h-full w-9/12">
          <HomeDetails />
          <Projects />
          <About />
          <Experiments/>
        </main>
    </>
  )
}
