import openMarketLogo from '../assets/images/OpenMarketLogo_4.png';
import Boton from './Boton';

const OpenMarket = ({ alVolver }) => {
  return (
    <div className="detalle-proyecto-page">
      
      <Boton alVolver={alVolver}/>

      <h2>Open Market - Detalle del Proyecto</h2>

      <img src={openMarketLogo} alt="Logo de Open Market" />

      <div className="tags-contenedor">
        <span className="tag-detalle categoria">Aplicación Web</span>
        <span className="tag-detalle estado">Finalizado</span>
      </div>

      <hr />

      <h3>Descripción General</h3>

      <p>
        Open Market es un proyecto de e-commerce desarrollado con HTML, CSS y JavaScript,
        inspirado en plataformas modernas de comercio electrónico. Su objetivo es ofrecer
        una experiencia interactiva para la visualización y exploración de productos,
        aplicando conceptos de diseño web, estructura responsiva y manipulación dinámica
        de contenido.
      </p>

      <h3>Tecnologías Aplicadas</h3>

      <ul className="detalle-lista-tech">
        <li>
          <strong>HTML5 & CSS3:</strong> Utilizados para la estructura visual del sitio,
          diseño responsivo y maquetación de las secciones de productos y navegación.
        </li>

        <li>
          <strong>JavaScript:</strong> Implementación de funcionalidades dinámicas como
          interacción con botones, visualización de productos y manipulación del DOM.
        </li>

        <li>
          <strong>Diseño Responsive:</strong> Adaptación de la interfaz para distintos
          tamaños de pantalla utilizando Flexbox y buenas prácticas de diseño web.
        </li>
      </ul>

      <h3>Funcionalidades Clave</h3>

      <ol className="detalle-lista-key">
        <li>
          Visualización dinámica de productos organizados por categorías.
        </li>
        <li>
          Navegación interactiva entre distintas secciones del e-commerce.
        </li>
        <li>
          Interfaz adaptable a dispositivos móviles y de escritorio.
        </li>
        <li>
          carrito de compras
        </li>
        <li>
          filtros de productos
        </li>
        <li>
          simulación de login
        </li>
        <li>
          catálogo dinámico
        </li>
      </ol>

    </div>
  )
}

export default OpenMarket;