import React from 'react';
import Boton from './Boton';

const DetallesProyecto = ({ proyecto, alVolver }) => {
  
  if (!proyecto) {
    return <div className="detalle-proyecto-page"><p>Cargando datos del proyecto...</p></div>;
  }

  const { 
    titulo, 
    categoria, 
    estado,
    imagen,
    descripcionExtendida, 
    descripcionExtendida2, 
    tecnologias,
    funcionalidades,
    links, 
    equipo 
  } = proyecto;

  const desc1 = descripcionExtendida || proyecto.descripcion || "Este proyecto no cuenta con una primera descripción disponible.";
  const desc2 = descripcionExtendida2 || "";

  return (
    <div className="detalle-proyecto-page">
      
      <div style={{ marginBottom: '20px' }}>
        <Boton alVolver={alVolver}/>
      </div>

      <h2>{titulo}</h2>
      
      {imagen && (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <img src={imagen} alt={`Logo de ${titulo}`} style={{ maxWidth: '250px', height: 'auto' }} />
        </div>
      )}

      <div className="tags-contenedor">
        <span className="tag-detalle categoria">{categoria}</span>
        <span className="tag-detalle estado">{estado}</span>
      </div>
      
      <hr />

      <h3>Descripción General</h3>
      <p style={{ whiteSpace: 'pre-line' }}>{desc1}</p>
      {desc2 && <p style={{ whiteSpace: 'pre-line' }}>{desc2}</p>}
      
      {tecnologias && tecnologias.length > 0 && (
        <>
          <h3>Tecnologías Aplicadas</h3>
          <ul className="detalle-lista-tech">
            {tecnologias.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </>
      )}

      {funcionalidades && funcionalidades.length > 0 && (
        <>
          <h3>Funcionalidades Clave</h3>
          <ul className="detalle-lista-key">
            {funcionalidades.map((func, index) => (
              <li key={index}>{func}</li>
            ))}
          </ul>
        </>
      )}

      <h3>Recursos del Proyecto</h3>
      <ul className="detalle-lista-tech">
        <li>
          <strong>Documento PDF:</strong>{' '}
          <a href={links?.pdf || "#"} target="_blank" rel="noreferrer">Ver recurso</a>
        </li>
        <li>
          <strong>Repositorio GitHub:</strong>{' '}
          <a href={links?.github || "#"} target="_blank" rel="noreferrer">Ver recurso</a>
        </li>
        <li>
          <strong>Google Drive:</strong>{' '}
          <a href={links?.drive || "#"} target="_blank" rel="noreferrer">Ver recurso</a>
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

export default DetallesProyecto;