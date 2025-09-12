import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Concultacy from "./pages/Concultacy";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";

export default function App() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/home" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/article" element={<Article />} />
         <Route path="/concultacy" element={<Concultacy />} />
         <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
   );
}
