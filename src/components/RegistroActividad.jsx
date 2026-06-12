import React from 'react';
import { Alert } from 'react-bootstrap';

const RegistroActividad = ({ fecha }) => {
  if (!fecha) return null;

  const opciones = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  };
  const fechaFormateada = fecha.toLocaleDateString('es-AR', opciones);

  return (
    <Alert 
      className="d-flex align-items-center shadow-sm rounded-4 mt-4 border-0" 
      style={{ 
        backgroundColor: 'rgba(138, 43, 226, 0.08)',
        color: '#333', 
        borderLeft: '5px solid #8A2BE2'
      }}
    >
      <div className="fs-3 me-3" style={{ color: '#8A2BE2' }}>
        <i className="fas fa-history"></i>
      </div>
      <div>
        <h6 className="mb-1 fw-bold" style={{ color: '#8A2BE2' }}>Registro de Actividad del Sistema</h6>
        <p className="mb-0 text-muted" style={{ fontSize: '0.9rem' }}>
          Última modificación detectada en la base de proyectos el <strong>{fechaFormateada}</strong>.
        </p>
      </div>
    </Alert>
  );
};

export default RegistroActividad;