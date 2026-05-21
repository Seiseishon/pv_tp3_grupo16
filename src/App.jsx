import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ListaProyectos from "./components/ListaProyectos";

import DetalleMercadoLiebre from "./components/MercadoLiebre";
import DetallePeliculas from "./components/DetallePeliculas";
import DetalleClima from "./components/DetalleClima";

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

        {proyectoActivo === 2 && (
          <DetalleMercadoLiebre alVolver={volverALista} />
        )}

        {proyectoActivo === 3 && <DetallePeliculas alVolver={volverALista} />}

        {proyectoActivo === 4 && <DetalleClima alVolver={volverALista} />}

        {proyectoActivo === 5 && (
          <DetalleEspejoMagico alVolver={volverALista} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
