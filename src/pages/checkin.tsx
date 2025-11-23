import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { useState } from "react"

export default function CheckinPage() {
  const [humor, setHumor] = useState("")
  const [energia, setEnergia] = useState("")
  const [foco, setFoco] = useState("")
  const [estresse, setEstresse] = useState("")

  function enviar() {
    console.log({ humor, energia, foco, estresse })
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Navbar />

      <main className="flex flex-col items-center mt-10 px-6 w-full">
        <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
          Check-in Emocional
        </h1>

        <div className="w-full max-w-md flex flex-col gap-4">
          <select
            className="p-3 rounded bg-white dark:bg-gray-800 text-black dark:text-white"
            value={humor}
            onChange={e => setHumor(e.target.value)}
          >
            <option value="">Humor</option>
            <option value="muito_bom">Muito bom</option>
            <option value="bom">Bom</option>
            <option value="neutro">Neutro</option>
            <option value="ruim">Ruim</option>
            <option value="muito_ruim">Muito ruim</option>
          </select>

          <select
            className="p-3 rounded bg-white dark:bg-gray-800 text-black dark:text-white"
            value={energia}
            onChange={e => setEnergia(e.target.value)}
          >
            <option value="">Energia</option>
            <option value="alta">Alta</option>
            <option value="media">Média</option>
            <option value="baixa">Baixa</option>
          </select>

          <select
            className="p-3 rounded bg-white dark:bg-gray-800 text-black dark:text-white"
            value={foco}
            onChange={e => setFoco(e.target.value)}
          >
            <option value="">Foco</option>
            <option value="alto">Alto</option>
            <option value="medio">Médio</option>
            <option value="baixo">Baixo</option>
          </select>

          <select
            className="p-3 rounded bg-white dark:bg-gray-800 text-black dark:text-white"
            value={estresse}
            onChange={e => setEstresse(e.target.value)}
          >
            <option value="">Estresse</option>
            <option value="alto">Alto</option>
            <option value="medio">Médio</option>
            <option value="baixo">Baixo</option>
          </select>

          <button
            onClick={enviar}
            className="bg-indigo-600 text-white py-2 rounded mt-4"
          >
            Enviar Check-in
          </button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
