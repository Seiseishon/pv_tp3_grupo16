import { useState } from 'react';
import proyectoService from '../services/proyectoService';
import ProyectoCard from './ProyectoCard';
import { useEffect } from 'react';
import FormularioProyecto from './FormularioProyecto';

const ListaProyectos = ({ alSeleccionarProyecto }) => {
  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
  const [proyectosFiltrados, setProyectosFiltrados] = useState(proyectoService.obtenerProyectos());

  const [fechaRegistro, setFechaRegistro] = useState(null);

  useEffect(() => {
    const fechaActual = new Date();

    setFechaRegistro(fechaActual);

    console.log("Se detectó un cambio en proyectos. Fecha capturada:", fechaActual);

  }, [proyectos]);

  const agregarProyecto = (nuevoProyecto) => {
    proyectoService.agregarProyecto(nuevoProyecto);

    setProyectos(proyectoService.obtenerProyectos());
    setProyectosFiltrados(proyectoService.obtenerProyectos());
  };

  const manejarAgregar = (e) => {
    e.preventDefault();

    if (titulo.trim() === '' || categoria.trim() === '') return;

    const nuevoProyecto = {
      id: Date.now(),
      titulo,
      categoria,
      estado,
      imagen: "",
      descripcionExtendida: descripcionExtendida || "Sin descripción asignada.",
      descripcionExtendida2: "",
      tecnologias: ["Tecnología a definir"],
      funcionalidades: ["Funcionalidad a definir"],
      links: {
        pdf: pdf || "",
        drive: drive || "",
        github: github || ""
      },
      equipo: equipoNombre ? [{ nombre: equipoNombre, rol: "Líder" }] : []
    };

    proyectoService.agregarProyecto(nuevoProyecto);
    setProyectos(proyectoService.obtenerProyectos());
    setProyectosFiltrados(proyectoService.obtenerProyectos());

    setformulario({
      titulo: "", categoria: "", estado: "Pendiente",
      descripcionExtendida: "", github: "", pdf: "", drive: "", equipoNombre: ""
    })
  };

  const eliminarProyecto = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos());
    setProyectosFiltrados(proyectoService.obtenerProyectos());
  }

  const manejarBusqueda = (e) => {
    const texto = e.target.value;
    if (texto === '') {
      setProyectosFiltrados(proyectoService.obtenerProyectos());
    } else {
      setProyectosFiltrados(proyectoService.buscarProyecto(texto));
    }
  };

  return (
    <>
      <h2 className='titulo-proyectos'>Listado de Proyectos</h2>

      <FormularioProyecto onAgregarProyecto={agregarProyecto}/>

      <hr />

      <div className="buscador" style={{ marginTop: '20px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Buscar proyecto por título..."
          onChange={manejarBusqueda}
          style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
        />
      </div>

      <div className="contenedor-proyectos">
        {proyectosFiltrados.map((proyecto) => (
          <ProyectoCard
            key={proyecto.id}
            proyecto={proyecto}
            onEliminar={eliminarProyecto}
            onVerDetalle={alSeleccionarProyecto}
          />
        ))}
      </div>
    </>
  );
};

export default ListaProyectos;