import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function SobrePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Navbar />

      <main className="flex flex-col items-center mt-10 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
          Sobre o MindCare
        </h1>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center">
          O MindCare é uma plataforma de bem-estar corporativo que utiliza inteligência
          artificial para avaliar indicadores emocionais, prever riscos de burnout e auxiliar
          colaboradores e gestores a manterem ambientes de trabalho mais saudáveis,
          equilibrados e produtivos.
        </p>
      </main>

      <Footer />
    </div>
  )
}
