"use client"

import HomeDetails from '@/pages/HomeDetails'
import Header from '../components/Header/Header'
import { useState } from 'react'
import { usePageContext } from '@/contexts/PageContext'

export default function Home() {

  const {currentPage} : any = usePageContext()

  console.log(currentPage)
  
  return (
    <>
      <Header />
        <main className="flex w-fit justify-center items-center mx-auto h-96">
          <HomeDetails />
        </main>
    </>
  )
}
