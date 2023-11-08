import Image from 'next/image'
import DashboardPage from './dashboard/page'

export default function Home() {
  return (
    <main className="flex min-h-screen mt-40 flex-col items-center justify-between">
      <DashboardPage/>
    </main>
  )
}
