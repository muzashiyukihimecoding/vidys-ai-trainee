import Header from "../components/Header";
import Footer from "../components/Footer";
import None404 from "./404";
import React, { useEffect, useState, useRef } from "react";

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
         <main className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 dark:bg-gray-900 dark:text-white min-h-screen">
            {/* Workout Card */}
            <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow">
               <h2 className="text-lg font-semibold mb-2">Today’s Workout</h2>
               <p className="mb-4">Full body HIIT · 30 min</p>
               <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                  Start Session
               </button>
            </div>

            {/* Chat Card */}
            <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow flex flex-col">
               <h2 className="text-lg font-semibold mb-2">AI Coach Chat</h2>
               <div className="flex-1 bg-gray-50 dark:bg-gray-600 p-2 rounded mb-2 overflow-y-auto text-sm">
                  <p>
                     <b>AI:</b> Ready to smash today’s goals? 💪
                  </p>
                  <p>
                     <b>You:</b> Let’s go!
                  </p>
               </div>
               <input
                  type="text"
                  placeholder="Type your message..."
                  className="p-2 border rounded dark:bg-gray-800 dark:border-gray-600"
               />
            </div>
         </main>
         <Footer />
      </>
   );
}
