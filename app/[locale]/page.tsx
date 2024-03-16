import HomeDetails from '@/components/HomeDetails'
import Header from '../../components/Header/Header'
import About from '@/components/About'
import { usePageContext } from '@/contexts/PageContext'
import Projects from '@/components/Projects'
import Experiments from '@/components/Experiments'
import LocaleSwitcherSelect from '@/components/LocaleSwitcher/LocaleSwitcher'

export default function Home() {
  
  return (
    <>
      <Header />
        <LocaleSwitcherSelect />
        <main className="flex flex-column justify-center items-center mx-auto relative h-full w-9/12">
          <HomeDetails />
          <Projects />
          <About />
          <Experiments/>
        </main>
    </>
  )
}
