import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Badge, Container } from 'react-bootstrap';
import style from '../css/DetallesProyecto.module.css';
import Boton from '../components/Boton';
import proyectoService from '../services/proyectoService';

const DetallesProyecto = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const proyecto = proyectoService.obtenerProyectos().find(p => p.id === parseInt(id));

  if (!proyecto) {
    return (
      <Container className="text-center py-5 mt-5">
        <h3 className="text-muted">No se encontró el proyecto o fue eliminado.</h3>
      </Container>
    );
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
    equipo,
    integrantes,
    recursos
  } = proyecto;

  const desc1 = descripcionExtendida || proyecto.descripcion || "Este proyecto no cuenta con una primera descripción disponible.";
  const desc2 = descripcionExtendida2 || "";

  const tieneRecursoForm = typeof recursos === 'string' && recursos.trim() !== '';
  const urlRecursoForm = tieneRecursoForm 
    ? (recursos.startsWith('http') ? recursos : `https://${recursos}`)
    : '#';

  return (
    <Container className={`${style.detalleProyectoPage} mt-4 mb-5`}>

      <Boton alVolver={() => navigate(-1)} />

      <h2 className={style.tituloH2}>{titulo} - Detalle del Proyecto</h2>

      {imagen && (
        <div className={style.contenedorImg}>
          <img className={style.imgProyecto} src={imagen} alt={`Logo de ${titulo}`} />
        </div>
      )}

      <div className="mb-3 d-flex gap-2">
        <Badge bg="secondary" style={{ backgroundColor: '#8A2BE2', padding: '8px 12px' }}>{categoria}</Badge>
        <Badge bg={estado === 'Finalizado' ? 'success' : 'warning'} style={{ padding: '8px 12px' }}>{estado}</Badge>
      </div>

      <hr className={style.linea} />

      <h3 className={style.tituloH3}>Descripción General</h3>
      <p className={style.parrafoDetalle}>{desc1}</p>
      {desc2 && <p className={style.parrafoDetalle}>{desc2}</p>}

      {tecnologias && tecnologias.length > 0 && (
        <>
          <h3 className={style.tituloH3}>Tecnologías Aplicadas</h3>
          <ul className={style.detalleListaTech}>
            {tecnologias.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </>
      )}

      {funcionalidades && funcionalidades.length > 0 && (
        <>
          <h3 className={style.tituloH3}>Funcionalidades Clave</h3>
          <ul className={style.detalleListaKey}>
            {funcionalidades.map((func, index) => (
              <li key={index}>{func}</li>
            ))}
          </ul>
        </>
      )}

      <h3 className={style.tituloH3}>Recursos del Proyecto</h3>
      <ul className={style.detalleListaTech}>
        {tieneRecursoForm && (
          <li>
            <strong>Enlace Externo:</strong>{' '}
            <a href={urlRecursoForm} target="_blank" rel="noreferrer" style={{ color: '#8A2BE2', fontWeight: 'bold' }}>
              Ver recurso compartido
            </a>
          </li>
        )}
        
        {links?.pdf && (
          <li>
            <strong>Documento PDF:</strong>{' '}
            <a href={links.pdf} target="_blank" rel="noreferrer">Ver recurso</a>
          </li>
        )}
        {links?.github && (
          <li>
            <strong>Repositorio GitHub:</strong>{' '}
            <a href={links.github} target="_blank" rel="noreferrer">Ver recurso</a>
          </li>
        )}
        {links?.drive && (
          <li>
            <strong>Google Drive:</strong>{' '}
            <a href={links.drive} target="_blank" rel="noreferrer">Ver recurso</a>
          </li>
        )}

        {!tieneRecursoForm && !links?.pdf && !links?.github && !links?.drive && (
          <li className="text-muted">No hay recursos ni enlaces registrados para este proyecto.</li>
        )}
      </ul>

      <h3 className={style.tituloH3}>Equipo de Trabajo</h3>
      <ul className={style.detalleListaKey}>
        {equipo && equipo.length > 0 ? (
          equipo.map((integrante, index) => (
            <li key={index}>
              <strong>{integrante.nombre}</strong> — <span style={{ color: '#666' }}>{integrante.rol}</span>
            </li>
          ))
        ) : integrantes ? (
          <li>
            <strong>Integrantes asignados:</strong> <span style={{ color: '#333' }}>{integrantes}</span>
          </li>
        ) : (
          <li>No hay integrantes asignados a este proyecto todavía.</li>
        )}
      </ul>

    </Container>
  );
};

export default DetallesProyecto;