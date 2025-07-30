import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="relative min-h-screen bg-[#FFDD55]">
      <div className="absolute top-0 left-0 w-full h-full bg-[#FFDD55] -z-10" />
      <Navbar />
      <main className="pt-20"> {/* Increased padding to ensure content clears Navbar */}
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;