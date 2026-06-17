import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Dashboard from "./Views/Dashboard";
import Perfil from "./Views/Perfil";
import ListaProyectos from "./Views/ListaProyectos";
import DetallesProyecto from "./Views/DetallesProyecto";
import { UsuarioProvider } from "./context/UsuarioContext";

function App() {
  return (
    <UsuarioProvider>
      <Header />
      <Nav />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        
        <Route path="/proyectos" element={<ListaProyectos />} />
        <Route path="/proyectos/:id" element={<DetallesProyecto />} />
        
        <Route path="/perfil" element={<Perfil />} />
      </Routes>

      <Footer />
    </UsuarioProvider>
  );
}

export default App;