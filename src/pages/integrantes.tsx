import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function IntegrantesPage() {
  const membros = [
    {
      nome: "Pedro Henrique dos Santos Costa",
      rm: "562156",
      turma: "1TDSPI",
      linkedin: "https://www.linkedin.com/in/pedro-henrique-s-costa",
      github: "https://github.com/Pedro-HCosta"
    },
    {
      nome: "Michael Vinicius Silva de Oliveira",
      rm: "565840",
      turma: "1TDSA",
      linkedin: "https://www.linkedin.com/in/maxxt7",
      github: "https://github.com/maxxt7"
    },
    {
      nome: "Rafael Rodrigues Trindade Paes",
      rm: "564303",
      turma: "1TDSPJ",
      linkedin: "https://www.linkedin.com/in/rafael-rodrigues-7708b0283/",
      github: "https://github.com/rafael04072007"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Navbar />

      <main className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-10">
          Integrantes
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {membros.map((m, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow p-8 text-center hover:shadow-lg transition-shadow"
            >
              <p className="font-bold text-lg text-gray-900 dark:text-white">{m.nome}</p>
              <p className="text-gray-700 dark:text-gray-300">RM: {m.rm}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Turma: {m.turma}</p>

              <div className="flex justify-center space-x-6">
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                    alt="LinkedIn"
                    className="w-9 h-9 hover:scale-110 transition-transform"
                  />
                </a>

                <a
                  href={m.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="GitHub"
                    className="w-9 h-9 hover:scale-110 transition-transform"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
