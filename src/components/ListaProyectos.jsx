import proyectoService from '../services/proyectoService';

// Le pasamos una "orden" (función) llamada alSeleccionarProyecto que viene desde App.jsx
const ListaProyectos = ({ alSeleccionarProyecto }) => {
  const proyectos = proyectoService.obtenerProyectos();

  return (
    <main>
      <h2>Listado de Proyectos</h2>
      
      <div className="buscador">
        <input 
          type="text" 
          placeholder="Buscar proyecto por título..." 
        />
      </div>

      <div className="contenedor-proyectos">
        {proyectos.map((proyecto) => (
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

            <button style={{ backgroundColor: '#ff4757', color: 'white' }}>
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ListaProyectos;