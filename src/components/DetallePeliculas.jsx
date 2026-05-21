const DetallePeliculas = () => {
  return (
    <div className="detalle-proyecto-page" style={{ padding: '20px', color: '#fff' }}>
      <h2>🎬 Aplicación de Películas — Detalle del Proyecto</h2>
      <p className="categoria-tag"><strong>Categoría:</strong> Aplicación Web</p>
      <p className="estado-tag"><strong>Estado:</strong> Finalizado</p>
      <hr />
      <h3>Descripción General</h3>
      <p>Una plataforma de catálogo cinematográfico interactivo diseñada para que los amantes del cine exploren tendencias y organicen sus títulos favoritos.</p>
      
      <h3>Tecnologías Aplicadas</h3>
      <ul>
        <li>Consumo de API Externa (The Movie Database - TMDB)</li>
        <li>Asincronismo puro mediante Async/Await y Fetch</li>
        <li>Filtros dinámicos basados en géneros de películas</li>
      </ul>

      <h3>Funcionalidades Clave</h3>
      <ol>
        <li>Renderizado en tiempo real de los pósters oficiales y calificaciones del público.</li>
        <li>Sección de "Favoritos" guardada de forma persistente en el LocalStorage.</li>
        <li>Ventana modal con la sinopsis detallada y el tráiler de YouTube al hacer clic.</li>
      </ol>
    </div>
  );
};

export default DetallePeliculas;    