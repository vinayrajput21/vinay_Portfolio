import React from "react";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();
  let backgroundClass = "bg-[#FFDD55]";

  switch (location.pathname) {
    case "/project":
      backgroundClass = "bg-[#EB7711]";
      break;
    case "/about":
    case "/contact":
      backgroundClass = "bg-yellow-400"; 
      break;
    default:
      break;
  }

  const isGradient = location.pathname === "/some-gradient-path";

  return (
    <div className={`relative min-h-screen ${isGradient ? "bg-gradient-to-br from-yellow-300 via-orange-300 to-pink-300" : backgroundClass}`}>
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;