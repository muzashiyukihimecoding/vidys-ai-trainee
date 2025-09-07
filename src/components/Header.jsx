import { useEffect } from "react";
import feather from "feather-icons";
import "../assets/style/style.css";

export default function Header() {
   useEffect(() => {
      feather.replace();

      const navbarNav = document.querySelector(".navbar-nav");
      const hamburger = document.querySelector("#hamburger-menu");

      //   Toggle Sidebar
      document.querySelector("#hamburger-menu").onclick = () => {
         navbarNav.classList.toggle("active");
      };
      //   Hide Sidebar
      document.addEventListener("click", (e) => {
         if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
            navbarNav.classList.remove("active");
         }
      });
   }, []);

   return (
      <nav className="navbar">
         <a href="/" className="navbar-logo">
            <span>Vidys</span>Trainee
         </a>

         <div className="navbar-nav">
            <a href="/home">Home</a>
            <a href="/article">Article</a>
            <a href="/concultacy">Concultacy</a>
            <a href="/about">About Us</a>
            <a href="/dashboard" id="dashboard">
               Dashboard
            </a>
         </div>

         <div className="navbar-extra">
            <a href="#" id="search">
               <i data-feather="search"></i>
            </a>
            <a href="#" id="hamburger-menu">
               <i data-feather="menu"></i>
            </a>
         </div>
      </nav>
   );
}
