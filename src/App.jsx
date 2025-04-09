import { ThemeProvider } from "./components/theme/theme-provider"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import RootLayout from "./_root/RootLayout"
import Home from "./_root/pages/Home"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="theme">
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
