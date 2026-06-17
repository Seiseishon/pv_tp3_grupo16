import { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

const FormularioProyecto = ({ onAgregarProyecto }) => {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [estado, setEstado] = useState('Pendiente');
  const [integrantes, setIntegrantes] = useState('');
  const [recursos, setRecursos] = useState('');  
  const [descripcion, setDescripcion] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault(); 
    
    if (!titulo.trim() || !categoria.trim()) return;

    const nuevoProyecto = {
      titulo,
      categoria,
      estado,
      integrantes,
      recursos,
      descripcion
    };

    onAgregarProyecto(nuevoProyecto);

    setTitulo('');
    setCategoria('');
    setEstado('Pendiente');
    setIntegrantes('');
    setRecursos('');
    setDescripcion('');
  };

  return (
    <div className="mb-4">
      <h4 className="fw-bold mb-4" style={{ color: "#8A2BE2", fontSize: "1.2rem" }}>
        <i className="fas fa-plus-circle me-2"></i> Agregar Nuevo Proyecto
      </h4>

      <Form onSubmit={manejarEnvio}>
        
        <Row className="g-3 mb-3">
          <Col md={4}>
            <Form.Group controlId="formTitulo">
              <Form.Control
                type="text"
                placeholder="Título del proyecto"
                className="shadow-none border-secondary-subtle"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          
          <Col md={4}>
            <Form.Group controlId="formCategoria">
              <Form.Control
                type="text"
                placeholder="Categoría (Ej: Aplicación Web)"
                className="shadow-none border-secondary-subtle"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                required
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="formEstado">
              <Form.Select
                className="shadow-none border-secondary-subtle text-muted"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
              >
                <option value="Pendiente">Pendiente</option>
                <option value="En Progreso">En Progreso</option>
                <option value="Finalizado">Finalizado</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="g-3 mb-3">
          <Col md={6}>
            <Form.Group controlId="formIntegrantes">
              <Form.Control
                type="text"
                placeholder="Integrantes asignados (Ej: Noel, Nelson)"
                className="shadow-none border-secondary-subtle"
                value={integrantes}
                onChange={(e) => setIntegrantes(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formRecursos">
              <Form.Control
                type="text"
                placeholder="Enlaces/Recursos (Ej: Link de GitHub o Figma)"
                className="shadow-none border-secondary-subtle"
                value={recursos}
                onChange={(e) => setRecursos(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="g-3 mb-4">
          <Col md={12}>
            <Form.Group controlId="formDescripcion">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Escribe una breve descripción del proyecto..."
                className="shadow-none border-secondary-subtle"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="text-end">
          <Button
            type="submit"
            style={{ backgroundColor: "#8A2BE2", border: "none" }}
            className="px-4 fw-semibold shadow-sm"
          >
            <i className="fas fa-save me-2"></i> Guardar Proyecto
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default FormularioProyecto;