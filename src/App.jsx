import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ListaProyectos from "./components/ListaProyectos";

import DetalleOpenMarket from "./components/OpenMarket";
import DetalleMercadoLiebre from "./components/MercadoLiebre";
import DetallePeliculas from "./components/DetallePeliculas";
import DetalleClima from "./components/DetalleClima";

import "./css/styles.css"; 

function App() {
  const [proyectoActivo, setProyectoActivo] = useState(0);

  const volverALista = () => setProyectoActivo(0);

  return (
    <div className="app-container">
      <Header />
      <Nav />

      <main>
        {proyectoActivo === 0 && (
          <ListaProyectos alSeleccionarProyecto={setProyectoActivo} />
        )}

        {proyectoActivo === 1 && (
          <DetalleOpenMarket alVolver={volverALista} />
        )}

        {proyectoActivo === 2 && (
          <DetalleMercadoLiebre alVolver={volverALista} />
        )}

        {proyectoActivo === 3 && (
          <DetallePeliculas alVolver={volverALista} />
        )}

        {proyectoActivo === 4 && (
          <DetalleClima alVolver={volverALista} />
        )}

        {proyectoActivo === 5 && (
          <div style={{ padding: "40px", textAlign: "center", background: "#fff", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
            <h2>Espejo Mágico</h2>
            <p style={{ margin: "20px 0", color: "#666" }}>El detalle de este proyecto estará disponible en la próxima etapa.</p>
            <button 
              onClick={volverALista}
              style={{ backgroundColor: "#8A2BE2", color: "white", padding: "10px 20px", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}
            >
              Volver al Listado
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;