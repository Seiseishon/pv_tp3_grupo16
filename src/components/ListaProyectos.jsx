import { useState } from 'react';
import proyectoService from '../services/proyectoService';
import ProyectoCard from './ProyectoCard';

const ListaProyectos = ({ alSeleccionarProyecto }) => {
  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());

  const [formulario, setformulario] = useState ({
    titulo: "",
    categoria: "",
    estado: "pendiente"
  })

  const {titulo, categoria, estado} = formulario;

  const cambioInput = (e) => {
    const {name,value} = e.target;
    setformulario ({
      ...formulario,
      [name]: value
    });
  };

  const manejarAgregar = (e) => {
    e.preventDefault(); 
    
    if (titulo.trim() === '' || categoria.trim() === '') return;

    const nuevoProyecto = {
      id: Date.now(), 
      titulo,
      categoria,
      estado
    };

    proyectoService.agregarProyecto(nuevoProyecto); 
    setProyectos(proyectoService.obtenerProyectos()); 

    setformulario ({
      titulo: "",
      categoria: "",
      estado: "Pendiente"
    })
  };

  const eliminarProyecto = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos());
  }
  
  const manejarBusqueda = (e) => {
    const texto = e.target.value;
    if (texto === '') {
      setProyectos(proyectoService.obtenerProyectos());
    } else {
      setProyectos(proyectoService.buscarProyecto(texto));
    }
  };

  return (
    <>
      <h2>Listado de Proyectos</h2>
      
      <div className="contenedor-formulario">
        <h3>Agregar Nuevo Proyecto</h3>
        <form onSubmit={manejarAgregar} className="form-agregar">
          <input 
            type="text" 
            name="titulo"
            placeholder="Título" 
            value={titulo}
            onChange={cambioInput}
            className="input-formulario"
          />
          <input 
            type="text" 
            name="categoria"
            placeholder="Categoría" 
            value={categoria}
            onChange={cambioInput}
            className="input-formulario"
          />
          <select 
            name="estado"
            value={estado} 
            onChange={cambioInput}
            className="select-formulario"
          >
            <option value="Pendiente">Pendiente</option>
            <option value="En progreso">En progreso</option>
            <option value="Finalizado">Finalizado</option>
          </select>
          <button type="submit" className="btn-agregar">
            Agregar Proyecto
          </button>
        </form>
      </div>

      <hr />

      <div className="buscador" style={{ marginTop: '20px', marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Buscar proyecto por título..." 
          onChange={manejarBusqueda}
        />
      </div>

      <div className="contenedor-proyectos">
        {proyectos.map((proyecto) => (
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