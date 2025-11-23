import { Link } from "react-router-dom"
import useTheme from "../hooks/useTheme"

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="w-full bg-indigo-600 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-semibold">MindCare</Link>

      <div className="flex items-center gap-6">
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/integrantes">Integrantes</Link>

        <button
          onClick={toggleTheme}
          className="ml-4 p-2 bg-white/20 rounded-lg hover:bg-white/30 transition flex items-center justify-center"
        >
          {theme === "light" ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeWidth="2" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36 6.36l-1.42-1.42M7.05 7.05L5.64 5.64m12.02 0l-1.41 1.41M7.05 16.95l-1.41 1.41M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  )
}
