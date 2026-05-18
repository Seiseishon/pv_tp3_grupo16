const ListaProyectos = () => {
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
        <div className="card-proyecto">
          <h3>Título del Proyecto de Muestra</h3>
          <p><strong>Categoría:</strong> Web</p>
          <p><strong>Estado:</strong> En progreso</p>
          
          <button>
            Eliminar
          </button>
        </div>
        
      </div>
    </main>
  );
};

export default ListaProyectos;