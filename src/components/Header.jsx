import { useEffect } from "react";
import { Link } from "react-router-dom";
import feather from "feather-icons";
import "../assets/style/style.css";
import "../assets/style/responsives.css";

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

   const navItems = [
      { path: "/home", label: "Home" },
      { path: "/about", label: "About Us" },
      { path: "/article", label: "Articles" },
      { path: "/concultacy", label: "AI Consultacy" },
      { path: "/dashboard", label: "Dashboard" },
   ];

   return (
      <nav className="navbar">
         <a href="/" className="navbar-logo">
            <span>Vidys</span>Trainee
         </a>

         <div className="navbar-nav">
            {/* New Navbar */}
            {/* <ul>
               {navItems.map((item) => {
                  <li key={item.path}>
                     <NavLink to={item.path} className={navClass}>
                        {item.label}
                     </NavLink>
                  </li>;
               })}
            </ul> */}

            {/* Previous Navbar */}
            <Link to="/home">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/article">Article</Link>
            <Link to="/concultacy">Concultacy</Link>
            <Link to="/dashboard" id="dashboard">
               Dashboard
            </Link>
         </div>

         <div className="navbar-extra">
            <a href="#" id="user">
               <i data-feather="user"></i>
            </a>
            <a href="#" id="hamburger-menu">
               <i data-feather="menu"></i>
            </a>
         </div>
      </nav>
   );
}
