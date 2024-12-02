import { Route, Routes } from "react-router-dom";
import Home from "@/pages/home";

const Pages = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route path="/about" element={<h1>About</h1>} />
    </Routes>
  );
};

export default Pages;
