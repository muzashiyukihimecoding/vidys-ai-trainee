import Header from "../components/Header";

export default function Home() {
   return (
      <>
         <Header />
         {/* Section Welcome */}
         <section className="hero">
            <div className="hero-content container">
               <h1>Vidys AI Trainer</h1>
               <p>
                  Selamat datang di Aplikasi Vidys Trainer, dimana tempat Anda
                  dapat mengakses banyak konten olahraga untuk para penyandang
                  disabilitas dan perempuan untuk gaya hidup sehat.
               </p>
            </div>
         </section>

         {/* Section Features */}
         <section className="features container">
            <div className="feature">
               <h2>AI Trainer</h2>
               <p>
                  Teknologi AI Canggih membantu Anda untuk melakukan gerakan
                  olahraga sesuai kebutuhan dan kondisi saat ini.
               </p>
            </div>
            <div className="feature">
               <h2>AI Consultant</h2>
               <p>
                  Konsultasi dengan AI Chatbot Pintar untuk masalah kesehatan
                  Anda.
               </p>
            </div>
         </section>
      </>
   );
}
