    import { BrowserRouter, Routes, Route } from "react-router-dom"
    import HomePage from "../pages/home"
    import SobrePage from "../pages/sobre"
    import FaqPage from "../pages/faq"
    import ContatoPage from "../pages/contato"
    import IntegrantesPage from "../pages/integrantes"
    import CheckinPage from "../pages/checkin"
    import DashboardColaboradorPage from "../pages/dashboardColaborador"
    import DashboardGestorPage from "../pages/dashboardGestor"

    export default function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contato" element={<ContatoPage />} />
            <Route path="/integrantes" element={<IntegrantesPage />} />
            <Route path="/checkin" element={<CheckinPage />} />
            <Route path="/dashboard" element={<DashboardColaboradorPage />} />
            <Route path="/dashboard/rh" element={<DashboardGestorPage />} />
        </Routes>
        </BrowserRouter>
    )
    }
