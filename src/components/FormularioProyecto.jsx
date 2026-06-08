import { useState } from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';

const FormularioProyecto = ({ onAgregarProyecto }) => {
  const [formulario, setFormulario] = useState({
    titulo: '',
    categoria: '',
    estado: 'Pendiente',
    descripcion: '',
    github: '',
    pdf: '',
    drive: '',
    equipoNombre: ''
  });

  const manejarCambio = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    
    if (!formulario.titulo.trim() || !formulario.categoria.trim()) return;

    const nuevoProyecto = {
      id: Date.now(),
      titulo: formulario.titulo,
      categoria: formulario.categoria,
      estado: formulario.estado,
      descripcion: formulario.descripcion,
      links: {
        github: formulario.github,
        pdf: formulario.pdf,
        drive: formulario.drive
      },
      equipo: formulario.equipoNombre ? [{ nombre: formulario.equipoNombre, rol: "Líder" }] : []
    };

    onAgregarProyecto(nuevoProyecto);

    setFormulario({
      titulo: '', categoria: '', estado: 'Pendiente', descripcion: '',
      github: '', pdf: '', drive: '', equipoNombre: ''
    });
  };

  return (
    <Card className="shadow-sm border-0 mb-5 rounded-4">
      <Card.Body className="p-4 p-md-5">
        
        <h4 className="fw-bold mb-4" style={{ color: '#8A2BE2' }}>
          Agregar Nuevo Proyecto
        </h4>

        <Form onSubmit={manejarEnvio}>
          
          <Row className="g-3 mb-3">
            <Col xs={12} md={5}>
              <Form.Control 
                type="text" 
                placeholder="Título del proyecto" 
                name="titulo"
                value={formulario.titulo}
                onChange={manejarCambio}
                required
                className="py-2"
              />
            </Col>
            <Col xs={12} md={4}>
              <Form.Control 
                type="text" 
                placeholder="Categoría (Ej: Aplicación Web)" 
                name="categoria"
                value={formulario.categoria}
                onChange={manejarCambio}
                required
                className="py-2"
              />
            </Col>
            <Col xs={12} md={3}>
              <Form.Select 
                name="estado" 
                value={formulario.estado} 
                onChange={manejarCambio}
                className="py-2"
              >
                <option value="Pendiente">Pendiente</option>
                <option value="En Progreso">En Progreso</option>
                <option value="Finalizado">Finalizado</option>
              </Form.Select>
            </Col>
          </Row>

          <Row className="g-3 mb-3">
            <Col xs={12}>
              <Form.Control 
                as="textarea" 
                rows={3} 
                placeholder="Escribe una breve descripción del proyecto..." 
                name="descripcion"
                value={formulario.descripcion}
                onChange={manejarCambio}
                className="py-2"
              />
            </Col>
          </Row>

          <Row className="g-3 mb-4">
            <Col xs={12} md={4}>
              <Form.Control 
                type="text" 
                placeholder="Enlace GitHub" 
                name="github"
                value={formulario.github}
                onChange={manejarCambio}
                className="py-2"
              />
            </Col>
            <Col xs={12} md={4}>
              <Form.Control 
                type="text" 
                placeholder="Enlace PDF" 
                name="pdf"
                value={formulario.pdf}
                onChange={manejarCambio}
                className="py-2"
              />
            </Col>
            <Col xs={12} md={4}>
              <Form.Control 
                type="text" 
                placeholder="Enlace Drive" 
                name="drive"
                value={formulario.drive}
                onChange={manejarCambio}
                className="py-2"
              />
            </Col>
          </Row>

          <Row className="g-3 align-items-center">
            <Col xs={12} md={8}>
              <Form.Control 
                type="text" 
                placeholder="Nombre del Integrante / Líder" 
                name="equipoNombre"
                value={formulario.equipoNombre}
                onChange={manejarCambio}
                className="py-2"
              />
            </Col>
            <Col xs={12} md={4}>
              <Button 
                type="submit" 
                className="w-100 fw-bold py-2 text-white"
                style={{ backgroundColor: '#1ebf1e', border: 'none' }}
              >
                Agregar Proyecto
              </Button>
            </Col>
          </Row>

        </Form>
      </Card.Body>
    </Card>
  );
};

export default FormularioProyecto;