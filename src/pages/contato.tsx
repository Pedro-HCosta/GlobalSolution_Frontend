import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function ContatoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Navbar />

      <main className="flex flex-col items-center mt-10 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
          Contato
        </h1>

        <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
          Entre em contato com a nossa equipe pelo formulário abaixo.
        </p>

        <form className="flex flex-col gap-4 w-full max-w-md">
          <input type="text" placeholder="Seu nome" className="p-3 rounded bg-white dark:bg-gray-800 text-black dark:text-white" />
          <input type="email" placeholder="Seu email" className="p-3 rounded bg-white dark:bg-gray-800 text-black dark:text-white" />
          <textarea placeholder="Mensagem" className="p-3 rounded bg-white dark:bg-gray-800 text-black dark:text-white h-32" />
          <button className="bg-indigo-600 text-white py-2 rounded">
            Enviar
          </button>
        </form>
      </main>

      <Footer />
    </div>
  )
}
