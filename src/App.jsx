import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Project from "./Pages/Project";
import ContactMe from "./Pages/ContactMe";
import AboutMe from "./Pages/AboutMe";
import Layout from "./Pages/Layout";
import { ModalProvider } from './Context/ModalContext';
import ModalRoot from './ModalRoot/ModalRoot.jsx';

function App() {
  return (
    <ModalProvider>
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
    </ModalProvider>
  );
}

export default App;