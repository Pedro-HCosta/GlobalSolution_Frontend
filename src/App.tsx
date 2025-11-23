import AppRoutes from "./routes/appRoutes"
import ThemeProvider from "./context/themeProvider"

export default function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  )
}
