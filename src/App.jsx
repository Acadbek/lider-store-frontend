import { ThemeProvider } from "./components/theme/theme-provider"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import RootLayout from "./_root/RootLayout"
import Home from "./_root/pages/Home"
import ProductListingPage from "./_root/pages/all-products"
import ProductDetailPage from "./_root/pages/all-products/slug"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="theme">
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<ProductListingPage />} />
            <Route path="/shop/:slug" element={<ProductDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
