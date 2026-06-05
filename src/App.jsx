import { useState } from "react";
import style from "./css/styles.module.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ListaProyectos from "./components/ListaProyectos";

import DetallesProyecto from "./components/DetallesProyecto";

import proyectoService from "./services/proyectoService";


function App() {
  const [proyectoActivo, setProyectoActivo] = useState(0);

  const volverALista = () => setProyectoActivo(0);

  const proyectoSeleccionado = proyectoActivo !== 0
    ? proyectoService.obtenerProyectos().find(p => p.id === proyectoActivo)
    : null;

  return (
    <>
      <Header />
      <Nav />

      <main className={style.mainGlobal}>
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
    </>
  );
}

export default App;