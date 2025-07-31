import React from "react";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();
  let backgroundStyle = { backgroundColor: "#FFDD55" };
  let isGradient = false;

  if (location.pathname === "/project") {
    backgroundStyle = { backgroundColor: "#EB7711" };
  } else if (location.pathname === "/about") {
    backgroundStyle = { backgroundColor: "#106EE8" };
  } else if (location.pathname === "/contact") {
    isGradient = true;
  }

  return (
    <div className={`relative min-h-screen ${isGradient ? "bg-gradient-to-br from-yellow-300 via-orange-300 to-pink-300" : ""}`} style={!isGradient ? backgroundStyle : {}}>
      <div
        className={`absolute top-0 left-0 w-full h-full -z-10 ${isGradient ? "bg-gradient-to-br from-yellow-300 via-orange-300 to-pink-300" : ""}`}
        style={!isGradient ? backgroundStyle : {}}
      />
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
