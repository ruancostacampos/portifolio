import HomeDetails from '@/pages/HomeDetails'
import Header from '../components/Header/Header'

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
