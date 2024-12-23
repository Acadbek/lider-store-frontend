import { Route, Routes } from "react-router-dom";
import Home from "@/pages/home";
import Footer from "../components/shared/Footer";
import Category from "../pages/category";

const Pages = () => {  
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/category" element={<Category />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Pages;
