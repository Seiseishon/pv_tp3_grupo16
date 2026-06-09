import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import ListasProyectosPages from "./pages/ListasProyectosPages";
import DetallesProyectoPages from "./pages/DetallesProyectoPages";
import Perfil from "./pages/Perfil";


function App() {
  return (
    <>
      <Header />
      <Nav />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/proyectos" element={<ListasProyectosPages />} />
        <Route path="/proyectos/:id" element={<DetallesProyectoPages />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;