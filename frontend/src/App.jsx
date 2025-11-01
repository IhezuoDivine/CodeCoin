import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Aboutme from "./pages/Aboutme.jsx";
import Tokenomics from "./components/Tokenomics.jsx";
import Howtobuy from "./components/Howtobuy.jsx";
import FAQ from "./components/FAQ.jsx";
import BlogDetail from "./pages/BlogDetail.jsx";
import BlogLists from "./pages/BlogLists.jsx";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutme" element={<Aboutme />} />
        <Route path="/Tokenomics" element={<Tokenomics />} />
        <Route path="/Howtobuy" element={<Howtobuy />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/BlogLists/" element={<BlogLists />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
