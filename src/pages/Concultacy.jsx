import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Concultacy() {
   return (
      <>
         <Header />

         <div className="consultation-container">
            {/* Hero */}
            <section className="consultation-hero">
               <div className="consultation-hero-content container">
                  <h1>Konsultasi Olahraga & Kesehatan</h1>
                  <p>
                     Dapatkan jawaban dari AI Consultant kami untuk mendukung
                     aktivitas olahraga dan kesehatan tubuh Anda
                  </p>
               </div>
            </section>
         </div>
         {/* <Footer /> */}

         <Footer />
      </>
   );
}
