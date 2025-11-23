import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Card from "../components/card"
import { Link } from "react-router-dom" 

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Navbar />

      <main className="flex flex-col items-center mt-10 px-6">
        <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
          Bem-vindo ao MindCare
        </h1>

        <p className="text-center text-gray-700 dark:text-gray-300 max-w-2xl mb-10">
          Uma solução de bem-estar corporativo baseada em IA, focada em saúde emocional,
          prevenção de burnout e suporte ao trabalho híbrido.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          <Card
            title="Check-in Emocional"
            description="Acompanhe seu humor, energia e foco diariamente."
          >
            <Link
              to="/checkin"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
            >
              Acessar
            </Link>
          </Card>

          <Card
            title="Dashboard"
            description="Veja seus indicadores de bem-estar e recomendações."
          >
            <Link
              to="/dashboard"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
            >
              Acessar
            </Link>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
