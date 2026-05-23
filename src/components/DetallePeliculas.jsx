import peliculaLogo from '../assets/images/pelicula.ico';
import Boton from './Boton';

const DetallePeliculas = ({ alVolver }) => {
  return (
    <div className="detalle-proyecto-page" style={{ padding: '20px', color: '#fff' }}>

      <Boton alVolver={alVolver} />

      <h2>Aplicación de Películas — Detalle del Proyecto</h2>

      <img src={peliculaLogo} alt="" />

      <div className="tags-contenedor">
        <span className="tag-detalle categoria">Aplicación Web</span>
        <span className="tag-detalle estado">Finalizado</span>
      </div>

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