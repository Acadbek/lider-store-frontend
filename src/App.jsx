import { ThemeProvider } from "./components/theme/theme-provider"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import RootLayout from "./_root/RootLayout"
import Home from "./_root/pages/Home"
import ProductListingPage from "./_root/pages/all-products"
import ProductDetailPage from "./_root/pages/all-products/slug"
import ContactPage from "./_root/pages/contact"
import NotFoundPage from "./_root/pages/404"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="theme">
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<ProductListingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/shop/:slug" element={<ProductDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
