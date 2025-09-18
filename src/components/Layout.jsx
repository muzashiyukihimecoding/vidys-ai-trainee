import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
   return (
      <div
         id="root"
         style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
         }}
      >
         <Header />

         <main style={{ flex: 1 }}>
            <Outlet /> {/* ini diganti sesuai route child */}
         </main>

         <Footer />
      </div>
   );
}
