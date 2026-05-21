const DetalleClima = () => {
  return (
    <div className="detalle-proyecto-page" style={{ padding: '20px', color: '#fff' }}>
      <h2>☀️ Aplicación de Clima — Detalle del Proyecto</h2>
      <p className="categoria-tag"><strong>Categoría:</strong> Aplicación Web</p>
      <p className="estado-tag"><strong>Estado:</strong> Finalizado</p>
      <hr />
      <h3>Descripción General</h3>
      <p>Dashboard meteorológico minimalista que proporciona alertas climáticas y pronósticos extendidos para cualquier coordenadas geográfica del planeta.</p>
      
      <h3>Tecnologías Aplicadas</h3>
      <ul>
        <li>Integración con la API de OpenWeatherMap</li>
        <li>Geolocalización nativa del navegador del usuario</li>
        <li>Manipulación dinámica del DOM basada en condiciones ambientales</li>
      </ul>

      <h3>Funcionalidades Clave</h3>
      <ol>
        <li>Detección automática de la ubicación del usuario al cargar la pantalla.</li>
        <li>Cambio de fondo de pantalla interactivo (si está lloviendo, se ve tormentoso; si es de noche, estrellado).</li>
        <li>Métricas detalladas de velocidad del viento, porcentaje de humedad y sensación térmica.</li>
      </ol>
    </div>
  );
};

export default DetalleClima;