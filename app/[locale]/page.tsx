import HomeDetails from '@/pages/HomeDetails'
import Header from '../../components/Header/Header'
import About from '@/pages/About'
import { usePageContext } from '@/contexts/PageContext'
import Projects from '@/pages/Projects'
import Experiments from '@/pages/Experiments'
import { useTranslations } from 'next-intl'
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
