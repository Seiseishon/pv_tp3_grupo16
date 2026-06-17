import { useState, useContext } from 'react';
import { Container, Card, Form, Button, Row, Col, Badge } from 'react-bootstrap';
import { UsuarioContext } from '../context/UsuarioContext';

const Perfil = () => {
  const { usuario, actualizarPerfil } = useContext(UsuarioContext);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [datosFormulario, setDatosFormulario] = useState(usuario);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setDatosFormulario({
      ...datosFormulario,
      [name]: value
    });
  };

  const guardarCambios = (e) => {
    e.preventDefault();
    actualizarPerfil(datosFormulario);
    setModoEdicion(false);
  };

  const cancelarEdicion = () => {
    setDatosFormulario(usuario);
    setModoEdicion(false);
  };

  return (
    <Container className="py-5" style={{ maxWidth: '650px' }}>
      
      <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
        <div 
          style={{ 
            background: 'linear-gradient(135deg, #8A2BE2, #5a189a)', 
            height: '140px' 
          }}
        ></div>

        <Card.Body className="px-5 pb-5 position-relative" style={{ marginTop: '-70px' }}>
          
          <div className="text-center mb-4">
            <div 
              className="bg-white rounded-circle d-inline-flex justify-content-center align-items-center shadow-sm"
              style={{ width: '130px', height: '130px', border: '5px solid white' }}
            >
              <i className="fas fa-user-tie" style={{ fontSize: '4.5rem', color: '#8A2BE2' }}></i>
            </div>
            
            {!modoEdicion && (
              <>
                <h3 className="fw-bold mt-3 mb-1 text-dark">{usuario.nombre}</h3>
                <p className="text-muted mb-0">{usuario.institucion}</p>
              </>
            )}
          </div>

          {!modoEdicion ? (
            <>
              <div className="bg-light rounded-4 p-4 mb-4 border border-light-subtle">
                <Row className="align-items-center mb-3">
                  <Col xs={2} className="text-center"><i className="fas fa-id-card fs-5 text-muted"></i></Col>
                  <Col xs={4} className="text-muted fw-bold px-0">DNI</Col>
                  <Col xs={6} className="text-dark fw-semibold text-end">{usuario.dni}</Col>
                </Row>
                
                <hr className="text-muted opacity-25 my-2" />
                
                <Row className="align-items-center my-3">
                  <Col xs={2} className="text-center"><i className="fas fa-user-shield fs-5 text-muted"></i></Col>
                  <Col xs={4} className="text-muted fw-bold px-0">Rol Asignado</Col>
                  <Col xs={6} className="text-end">
                    <Badge bg="secondary" style={{ backgroundColor: '#8A2BE2', padding: '8px 15px', letterSpacing: '0.5px' }} className="rounded-pill">
                      {usuario.rol}
                    </Badge>
                  </Col>
                </Row>

                <hr className="text-muted opacity-25 my-2" />
                
                <Row className="align-items-center mt-3">
                    <Col xs={2} className="text-center"><i className="fas fa-university fs-5 text-muted"></i></Col>
                    <Col xs={4} className="text-muted fw-bold px-0">Establecimiento</Col>
                    <Col xs={6} className="text-dark fw-semibold text-end">{usuario.institucion}</Col>
                </Row>
              </div>

              <div className="d-grid">
                <Button 
                  variant="outline-dark" 
                  className="fw-bold py-2 rounded-pill shadow-sm"
                  onClick={() => setModoEdicion(true)}
                  style={{ color: '#8A2BE2', borderColor: '#8A2BE2' }}
                >
                  <i className="fas fa-user-edit me-2"></i> Editar Perfil
                </Button>
              </div>
            </>
          ) : (
            
            <Form onSubmit={guardarCambios} className="bg-light rounded-4 p-4 border border-light-subtle">
              <h5 className="text-center mb-4 fw-bold" style={{ color: '#8A2BE2' }}>Actualizar Datos</h5>
              
              <Form.Group className="mb-3" controlId="formNombre">
                <Form.Label className="fw-bold text-muted small">Nombre Completo</Form.Label>
                <Form.Control 
                  type="text" 
                  name="nombre"
                  value={datosFormulario.nombre} 
                  onChange={manejarCambio} 
                  required 
                  className="shadow-none border-secondary-subtle rounded-3"
                />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formDni">
                    <Form.Label className="fw-bold text-muted small">DNI</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="dni"
                      value={datosFormulario.dni} 
                      onChange={manejarCambio} 
                      required 
                      className="shadow-none border-secondary-subtle rounded-3"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formRol">
                    <Form.Label className="fw-bold text-muted small">Rol</Form.Label>
                    <Form.Select 
                      name="rol"
                      value={datosFormulario.rol} 
                      onChange={manejarCambio}
                      className="shadow-none border-secondary-subtle rounded-3"
                    >
                      <option value="Alumno">Alumno</option>
                      <option value="Docente">Docente</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-4" controlId="formInstitucion">
                <Form.Label className="fw-bold text-muted small">Institución</Form.Label>
                <Form.Control 
                  type="text" 
                  name="institucion"
                  value={datosFormulario.institucion} 
                  onChange={manejarCambio} 
                  required 
                  className="shadow-none border-secondary-subtle rounded-3"
                />
              </Form.Group>

              <div className="d-flex justify-content-end gap-2 mt-4">
                <Button 
                  variant="light" 
                  className="px-4 fw-bold rounded-pill text-muted border"
                  onClick={cancelarEdicion}
                >
                  Cancelar
                </Button>
                <Button 
                  type="submit" 
                  className="px-4 fw-bold rounded-pill border-0 shadow-sm"
                  style={{ backgroundColor: '#8A2BE2' }}
                >
                  <i className="fas fa-check me-2"></i> Guardar
                </Button>
              </div>
            </Form>
          )}

        </Card.Body>
      </Card>
    </Container>
  );
};

export default Perfil;