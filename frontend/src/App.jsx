import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Aboutme from "./pages/Aboutme.jsx";
import Tokenomics from "./components/Tokenomics.jsx";
import Howtobuy from "./components/Howtobuy.jsx";
import FAQ from "./components/FAQ.jsx";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutme" element={<Aboutme />} />
        <Route path="/Tokenomics" element={<Tokenomics />} />
        <Route path="/Howtobuy" element={<Howtobuy />} />
        <Route path="/FAQ" element={<FAQ />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
