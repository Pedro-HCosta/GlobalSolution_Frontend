import { Link } from "react-router-dom"

export default function Navbar() {

  return (
    <nav className="w-full bg-indigo-600 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-semibold">MindCare</Link>

      <div className="flex items-center gap-6">
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/integrantes">Integrantes</Link>
      </div>
    </nav>
  )
}
