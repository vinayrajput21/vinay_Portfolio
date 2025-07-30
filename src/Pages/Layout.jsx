import React from "react";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();
  const bgColor = location.pathname === "/project" ? "#fe9735" : "#FFDD55";

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: bgColor }}>
      <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundColor: bgColor, zIndex: -10 }} />
      <Navbar />
      <main className="pt-20"> 
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;