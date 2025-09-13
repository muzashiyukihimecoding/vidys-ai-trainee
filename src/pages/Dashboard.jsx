import Header from "../components/Header";
import Footer from "../components/Footer";
import None404 from "./404";

export default function Dashboard() {
   return (
      <>
         <Header />
         {/* <div className="wrapper">
            <main className="p-4">
               <h1>Dashboard</h1>
               <p>Selamat Datang di Dashboard Pribadi Anda.</p>
               <p>
                  Disini Anda dapat melihat semua aktivitas yang Anda lakukan
                  dan daftar rencana kesehatan Anda
               </p>
            </main>
         </div> */}
         <None404 />
         <Footer />
      </>
   );
}
