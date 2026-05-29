import React from 'react';

// Recibe  props el objeto "proyecto" completo y la función "alVolver"
const DetalleProyecto = ({ proyecto, alVolver }) => {
  
  // 1. DESESTRUCTURACIÓN
  const { 
    titulo, 
    categoria, 
    estado, 
    descripcionExtendida, 
    descripcionExtendida2, 
    links, 
    equipo 
  } = proyecto;

  return (
    <div className="detalle-proyecto-page">
      
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

      <h2>{titulo}</h2>
      <div className="tags-contenedor">
        <span className="tag-detalle categoria">{categoria}</span>
        <span className="tag-detalle estado">{estado}</span>
      </div>
      
      <hr />

      <h3>Descripción General</h3>
      <p>{descripcionExtendida}</p>
      <p>{descripcionExtendida2}</p>
      
      <h3>Recursos del Proyecto</h3>
      <ul className="detalle-lista-tech">
        <li>
          <strong>Documento PDF / Drive:</strong>{' '}
          <a href={links?.pdf} target="_blank" rel="noreferrer">
            Abrir Documentación Oficial
          </a>
        </li>
        <li>
          <strong>Repositorio GitHub:</strong>{' '}
          <a href={links?.github} target="_blank" rel="noreferrer">
            Ver Código Fuente (Repository)
          </a>
        </li>
      </ul>

      <h3>Equipo de Trabajo</h3>
      <ul className="detalle-lista-key">
        {equipo && equipo.length > 0 ? (
          equipo.map((integrante, index) => (
            <li key={index}>
              <strong>{integrante.nombre}</strong> — <span style={{color: '#666'}}>{integrante.rol}</span>
            </li>
          ))
        ) : (
          <li>No hay integrantes asignados a este proyecto todavía.</li>
        )}
      </ul>

    </div>
  );
};

export default DetalleProyecto;