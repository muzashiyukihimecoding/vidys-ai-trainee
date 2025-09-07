import Header from "../components/Header";

export default function Dashboard() {
   return (
      <>
         <Header />
         <main className="p-4">
            <h1>Dashboard</h1>
            <p>Selamat Datang di Dashboard Pribadi Anda.</p>
            <p>
               Disini Anda dapat melihat semua aktivitas yang Anda lakukan dan
               daftar rencana kesehatan Anda
            </p>
         </main>
      </>
   );
}
