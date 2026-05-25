import logoEspejo from '../assets/images/espejo.ico';
import Boton from './Boton';

const EspejoMagico = ({ alVolver }) => {
  return (
    <div className="detalle-proyecto-page">
      
      <Boton alVolver={alVolver}/>

      <h2>Espejo Magico - Detalle del Proyecto</h2>

      <img src={logoEspejo} alt="Logo Espejo Magico" />

      <div className="tags-contenedor">
        <span className="tag-detalle categoria">Juego</span>
        <span className="tag-detalle estado">Finalizado</span>
      </div>

      <hr />

      <h3>Descripción General</h3>

      <p>
        Espejo Mágico es un juego web interactivo desarrollado en React utilizando HTML, CSS y JavaScript.
        El objetivo principal del proyecto es ofrecer una experiencia lúdica y visualmente atractiva basada en la lógica y la simetría, 
        aplicando conceptos avanzados de manejo de estado en tiempo real,
        renderizado condicional y un diseño responsivo que garantiza una excelente experiencia de usuario.
      </p>

      <h3>Tecnologías Aplicadas</h3>

      <ul className="detalle-lista-tech">
        <li>
          <strong>React & JavaScript (ES6):</strong> Implementación de la lógica del juego mediante el uso de hooks (useState, useEffect),
           gestión de eventos dinámicos y manipulación eficiente del árbol de componentes.
        </li>

        <li>
          <strong>HTML5 & CSS3: </strong> Maquetación estructural del tablero de juego y aplicaciones de estilos personalizados,
          incluyendo transiciones y animaciones floidas para simular el efecto reflejo.
        </li>

        <li>
          <strong>Diseño Responsivo: </strong> Adaptación completa de la interfaz para pantallas de teléfonos, tablets y computadoras de escritorio, utilizando Flexbox y CSS grid.
        </li>
      </ul>

      <h3>Funcionalidades Clave</h3>

      <ol className="detalle-lista-key">
        <li>
          Lógica de juego interactiva y dinámica en tiempo real.
        </li>
        <li>
          Interfaz gráfica inmersiva con efectos visuales de simetría.
        </li>
        <li>
          Control de estados del juego (inicio, reinicio, niveles o puntuación).
        </li>
        <li>
          Animaciones fluidas al interactuar con los elementos del tablero.
        </li>
        <li>
          Sistema adaptable (Responsive Design) para cualquier dispositivo.
        </li>
        <li>
          Integración fluida con el panel principal de proyectos.
        </li>
      </ol>

    </div>
  )
}

export default EspejoMagico;