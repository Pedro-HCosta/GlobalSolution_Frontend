import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function FaqPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Navbar />

      <main className="flex flex-col items-center mt-10 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
          Perguntas Frequentes
        </h1>

        <div className="flex flex-col gap-6 text-gray-700 dark:text-gray-300">
          <div>
            <h2 className="text-xl font-semibold">O que é o MindCare?</h2>
            <p>
              É um sistema que monitora bem-estar emocional e indica possíveis riscos de sobrecarga.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Eu preciso informar muitos dados?</h2>
            <p>
              Apenas indicadores emocionais simples. Nada sensível é solicitado.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">O gestor vê meus dados?</h2>
            <p>
              Apenas dados agregados aparecem para gestores. Informações individuais são privadas.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
