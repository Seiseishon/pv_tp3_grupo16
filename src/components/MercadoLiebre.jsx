// Recibe "alVolver" para que funcione el botón de regresar que programamos antes
const DetalleMercadoLiebre = ({ alVolver }) => {
  return (
    <div className="detalle-proyecto-page">
      
      {/* Botón para regresar al listado general */}
      <button 
        onClick={alVolver}
        style={{ 
          background: '#f0f0f0', 
          border: '1px solid #ccc', 
          padding: '8px 15px', 
          borderRadius: '5px', 
          cursor: 'pointer', 
          marginBottom: '20px', 
          fontWeight: 'bold' 
        }}
      >
        ← Volver al Listado
      </button>

      {/* Título Principal */}
      <h2>🛒 Mercado Liebre — Detalle del Proyecto</h2>
      
      {/* Etiquetas de información rápida */}
      <div className="tags-contenedor">
        <span className="tag-detalle categoria">Aplicación Web</span>
        <span className="tag-detalle estado">Finalizado</span>
      </div>
      
      <hr />

      <h3>Descripción General</h3>
      <p>
        Este proyecto consiste en una réplica funcional de una plataforma de comercio electrónico (e-commerce) 
        inspirada en Mercado Libre. Está orientada a la simulación de compra y venta de productos tecnológicos, 
        artículos del hogar y de indumentaria.
      </p>
      
      <h3>Tecnologías Aplicadas</h3>
      <ul className="detalle-lista-tech">
        <li><strong>HTML5 & CSS3 Avanzado:</strong> Uso de Flexbox y CSS Grid para diseñar toda la botonera y el catálogo de productos adaptables a celulares.</li>
        <li><strong>JavaScript Vanilla:</strong> Toda la lógica interactiva para el manejo del carrito de compras y cálculo de precios totales.</li>
        <li><strong>Node.js & Express:</strong> Utilizado en la etapa previa para el manejo de las rutas de productos y simulación del servidor.</li>
      </ul>

      <h3>Funcionalidades Clave</h3>
      <ol className="detalle-lista-key">
        <li>Formulario de registro e inicio de sesión de usuarios con validaciones de campos vacíos.</li>
        <li>Buscador de productos en tiempo real con filtrado dinámico por categoría, precio y relevancia.</li>
        <li>Carrusel interactivo de ofertas destacadas en la pantalla de inicio y sistema de añadir productos al carrito.</li>
      </ol>

    </div>
  );
};

export default DetalleMercadoLiebre;