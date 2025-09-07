import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";

export default function App() {
   return (
      <Routes>
         <Route path="/home" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
   );
}
