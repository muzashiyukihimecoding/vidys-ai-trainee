import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
   return (
      <>
         <Header />
         <main>
            {/* Section Welcome */}
            <section className="home-hero">
               <div className="home-hero-content container">
                  <h1>Vidys AI Trainer</h1>
                  <p>
                     Selamat datang di Aplikasi Vidys Trainer, dimana tempat
                     Anda dapat mengakses banyak konten olahraga untuk para
                     penyandang disabilitas dan perempuan untuk gaya hidup sehat
                  </p>
               </div>
            </section>

            {/* Section Features */}
            <section className="features container">
               <div className="feature-card">
                  <h2>AI Trainer</h2>
                  <p>
                     Teknologi AI Canggih membantu Anda untuk melakukan gerakan
                     olahraga sesuai kebutuhan dan kondisi saat ini
                  </p>
                  <img
                     src="https://cdn-icons-png.flaticon.com/128/1719/1719726.png"
                     alt="AI Trainer"
                     id="ai-trainer"
                  />
               </div>
               <div className="feature-card">
                  <h2>AI Consultant</h2>
                  <p>
                     Konsultasi dengan AI Chatbot Pintar untuk masalah kesehatan
                     Anda
                  </p>
                  <img
                     src="https://cdn-icons-png.flaticon.com/128/10242/10242676.png"
                     alt="AI Consultant"
                     id="feat-img"
                  />
               </div>
            </section>
         </main>
         <Footer />
      </>
   );
}
