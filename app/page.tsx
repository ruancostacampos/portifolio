import HomeDetails from '@/components/Home/HomeDetails'
import Header from '../components/Header'
import ModelViewer from '@/components/Home/ModelViewer'

export default function Home() {
  return (
    <>
      <Header />
        <main className="flex w-fit justify-center items-center mx-auto h-96">
          <HomeDetails />
        </main>
    </>
  )
}
