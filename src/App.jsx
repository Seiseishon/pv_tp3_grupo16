import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ListaProyectos from "./components/ListaProyectos";

import DetallesProyecto from "./components/DetallesProyecto"; 

import proyectoService from "./services/proyectoService"; 

import "./css/styles.css"; 

function App() {
  const [proyectoActivo, setProyectoActivo] = useState(0);

  const volverALista = () => setProyectoActivo(0);

  const proyectoSeleccionado = proyectoActivo !== 0 
    ? proyectoService.obtenerProyectos().find(p => p.id === proyectoActivo) 
    : null;

  return (
    <div className="app-container">
      <Header />
      <Nav />

      <main>
        {proyectoActivo === 0 && (
          <ListaProyectos alSeleccionarProyecto={setProyectoActivo} />
        )}

        {proyectoActivo !== 0 && proyectoSeleccionado && (
          <DetallesProyecto 
            proyecto={proyectoSeleccionado} 
            alVolver={volverALista} 
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;