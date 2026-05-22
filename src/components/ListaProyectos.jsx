import { useState } from 'react';
import proyectoService from '../services/proyectoService';

// Le pasamos una "orden" (función) llamada alSeleccionarProyecto que viene desde App.jsx
const ListaProyectos = ({ alSeleccionarProyecto }) => {
  
  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
  const [busqueda, setBusqueda] = useState('');

  const eliminarProyecto = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos());
    // Aquí podrías agregar lógica para actualizar la lista de proyectos después de eliminar uno
  }
  
  const buscarProyectos = () => {
    if (busqueda.trim() === '') {
      return proyectos; // Si no hay búsqueda, mostrar todos los proyectos
    } else {
      return proyectos.filter(proyecto => 
        proyecto.titulo.toLowerCase().includes(busqueda.toLowerCase())
      );
    }
  };

  const proyectosFiltrados = buscarProyectos(); 

  return (
    <main>
      <h2>Listado de Proyectos</h2>
      
      <div className="buscador">
        <input 
          type="text" 
          placeholder="Buscar proyecto por título..." 
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      <div className="contenedor-proyectos">
        {proyectosFiltrados.map((proyecto) => (
          <div className="card-proyecto" key={proyecto.id}>
            <h3>{proyecto.titulo}</h3>
            <p><strong>Categoría:</strong> {proyecto.categoria}</p>
            <p><strong>Estado:</strong> {proyecto.estado}</p>
            
            {/* BOTÓN NUEVO: Al hacer clic, activa la vista de detalle correspondiente */}
            <button 
              onClick={() => alSeleccionarProyecto(proyecto.id)}
              style={{ backgroundColor: '#8A2BE2', color: 'white', marginBottom: '8px' }}
            >
              Ver Detalle
            </button>

            <button 
              onClick={() => eliminarProyecto(proyecto.id)}
              style={{ backgroundColor: '#ff4757', color: 'white' }}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ListaProyectos;