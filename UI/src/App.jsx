import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './Pages/Home';
import Project from "./Pages/Project";
import ContactMe from "./Pages/ContactMe";
import AboutMe from "./Pages/AboutMe";
import Layout from "./Pages/Layout";
import { ModalProvider, useModal } from './Context/ModalContext';
import ModalRoot from './ModalRoot/ModalRoot.jsx';

function AppContent() {
  const { openInfoModal } = useModal();

  useEffect(() => {
    const timer = setTimeout(() => {
      openInfoModal();
    }, 60000);

    return () => clearTimeout(timer);
  }, [openInfoModal]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<ContactMe />} />
        </Route>
      </Routes>
      <ModalRoot />
    </BrowserRouter>
  );
}

function App() {
  return (
    <ModalProvider>
      <AppContent />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </ModalProvider>
  );
}

export default App;