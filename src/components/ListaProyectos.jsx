import { useState } from 'react';
import proyectoService from '../services/proyectoService';

const ListaProyectos = ({ alSeleccionarProyecto }) => {
  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());

  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [estado, setEstado] = useState('Pendiente');

  const manejarAgregar = (e) => {
    e.preventDefault(); 
    
    if (titulo.trim() === '' || categoria.trim() === '') return;

    const nuevoProyecto = {
      id: Date.now(), 
      titulo: titulo,
      categoria: categoria,
      estado: estado
    };

    proyectoService.agregarProyecto(nuevoProyecto); 
    setProyectos(proyectoService.obtenerProyectos()); 

    setTitulo('');
    setCategoria('');
    setEstado('Pendiente');
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
            placeholder="Título" 
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="input-formulario"
          />
          <input 
            type="text" 
            placeholder="Categoría" 
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="input-formulario"
          />
          <select 
            value={estado} 
            onChange={(e) => setEstado(e.target.value)}
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
          <div className="card-proyecto" key={proyecto.id}>
            <h3>{proyecto.titulo}</h3>
            <p><strong>Categoría:</strong> {proyecto.categoria}</p>
            <p><strong>Estado:</strong> {proyecto.estado}</p>
            
            <button 
              onClick={() => alSeleccionarProyecto(proyecto.id)}
              style={{ backgroundColor: '#8A2BE2', color: 'white', marginBottom: '8px', width: '100%', padding: '10px', border: 'none', borderRadius: '8px' }}
            >
              Ver Detalle
            </button>

            <button 
              onClick={() => eliminarProyecto(proyecto.id)}
              style={{ backgroundColor: '#ff4757', color: 'white', width: '100%', padding: '10px', border: 'none', borderRadius: '8px' }}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListaProyectos;