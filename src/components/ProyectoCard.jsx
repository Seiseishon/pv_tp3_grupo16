import { Card, Button, Badge } from 'react-bootstrap';
import styles from '../css/ProyectoCard.module.css';
import { Link } from 'react-router-dom';

const ProyectoCard = ({ proyecto, onEliminar, onVerDetalle }) => {
  return (
    <Card className={`h-100 shadow-sm border-light ${styles['efecto-flotante']}`}>
      <Card.Body className="d-flex flex-column p-4">

        <Card.Title className="fw-bold fs-4 mb-3 text-dark">
          {proyecto.titulo}
        </Card.Title>

        <Card.Subtitle className="mb-3 text-muted fs-6">
          <span className="fw-bold">Categoría:</span> {proyecto.categoria}
        </Card.Subtitle>

        <div className="mb-4 fs-6 flex-grow-1">
          <span className="fw-bold me-2">Estado:</span>
          <Badge 
            bg={proyecto.estado === 'Finalizado' ? 'success' : 'warning'} 
            text={proyecto.estado === 'Finalizado' ? 'light' : 'dark'}
            pill
            className="px-3 py-2" 
          >
            {proyecto.estado}
          </Badge>
        </div>

        <hr className="text-muted opacity-25 mb-3" />

        <div className="d-grid gap-2 mt-auto">
          <Button
            as={Link}
            className={`fw-bold text-white py-2 ${styles['boton-morado']}`}
            to={`/proyectos/${proyecto.id}`}
          >
            Ver Detalle
          </Button>

          <Button
            variant="outline-danger"
            className="fw-bold py-2"
            onClick={() => onEliminar(proyecto.id)}
          >
            Eliminar
          </Button>
        </div>

      </Card.Body>
    </Card>
  );
};

export default ProyectoCard;