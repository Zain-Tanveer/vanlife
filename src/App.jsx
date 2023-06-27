import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Vans from "./components/Vans.jsx";

import Header from "./components/Shared/Header.jsx";
import Footer from "./components/Shared/Footer.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
