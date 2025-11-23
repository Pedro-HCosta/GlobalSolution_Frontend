import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Chart from "../components/chart"

export default function DashboardColaboradorPage() {
  const dados = [20, 40, 60, 50, 70]

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Navbar />

      <main className="px-6 mt-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-10">
          Seu Dashboard
        </h1>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-3xl">
          <h2 className="text-xl font-semibold mb-4">Histórico Emocional</h2>
          <Chart values={dados} />
        </div>
      </main>

      <Footer />
    </div>
  )
}
