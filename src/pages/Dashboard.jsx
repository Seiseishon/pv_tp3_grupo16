import { Container, Row, Col, Card, ListGroup, Badge, ProgressBar, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; 
import style from "../css/ListaProyectos.module.css";
import proyectoService from "../services/proyectoService";

const Dashboard = () => {
  const navigate = useNavigate();

  const proyectos = proyectoService.obtenerProyectos();
  const pendientes = proyectos.filter(p => p.estado === "Pendiente");
  const enProgresos = proyectos.filter(p => p.estado === "En Progreso");
  const finalizados = proyectos.filter(p => p.estado === "Finalizado");
  
  const totalProyectos = proyectos.length;
  const porcentajeProgreso = totalProyectos === 0 ? 0 : Math.round((finalizados.length / totalProyectos) * 100);

  return (
    <Container className="py-4">
      
      <div className="d-flex justify-content-between align-items-end mb-4 pb-3 border-bottom">
        <div>
          <h2 className="fw-bold text-dark mb-1">Panel de Control</h2>
          <p className="text-muted mb-0">Resumen general de proyectos y actividad del equipo.</p>
        </div>
        <Button 
          style={{ backgroundColor: '#8A2BE2', border: 'none' }} 
          className="shadow-sm fw-semibold px-4 py-2"
          onClick={() => navigate('/proyectos')}
        >
          <i className="fas fa-plus me-2"></i> Ver / Crear Proyecto
        </Button>
      </div>

      <Row className="g-4 mb-5">
        <Col xs={12} md={4}>
          <Card className={`h-100 border-0 shadow-sm rounded-4 ${style.tarjetaAnimada}`}>
            <Card.Body className="d-flex align-items-center">
              <div className="bg-warning bg-opacity-10 text-warning p-3 rounded-3 me-3 fs-3">
                <i className="fas fa-clipboard-list"></i>
              </div>
              <div>
                <h6 className="text-muted mb-1 text-uppercase fw-bold" style={{ fontSize: '0.8rem' }}>Pendientes</h6>
                <h3 className="fw-bold mb-0 text-dark">{pendientes.length}</h3>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4}>
          <Card className={`h-100 border-0 shadow-sm rounded-4 ${style.tarjetaAnimada}`}>
            <Card.Body className="d-flex align-items-center">
              <div className="bg-primary bg-opacity-10 text-primary p-3 rounded-3 me-3 fs-3">
                <i className="fas fa-spinner fa-spin-pulse"></i>
              </div>
              <div>
                <h6 className="text-muted mb-1 text-uppercase fw-bold" style={{ fontSize: '0.8rem' }}>En Progreso</h6>
                <h3 className="fw-bold mb-0 text-dark">{enProgresos.length}</h3>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4}>
          <Card className={`h-100 border-0 shadow-sm rounded-4 ${style.tarjetaAnimada}`}>
            <Card.Body className="d-flex align-items-center">
              <div className="bg-success bg-opacity-10 text-success p-3 rounded-3 me-3 fs-3">
                <i className="fas fa-check-circle"></i>
              </div>
              <div>
                <h6 className="text-muted mb-1 text-uppercase fw-bold" style={{ fontSize: '0.8rem' }}>Finalizados</h6>
                <h3 className="fw-bold mb-0 text-dark">{finalizados.length}</h3>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="g-4">
        
        <Col xs={12} lg={8}>
          <Card className="border-0 shadow-sm rounded-4 h-100">
            <Card.Header className="bg-white border-0 pt-4 pb-0 px-4">
              <h5 className="fw-bold text-dark mb-0">
                <i className="fas fa-bell me-2" style={{ color: '#8A2BE2' }}></i> Últimas Novedades
              </h5>
            </Card.Header>
            <Card.Body className="p-4">
              <ListGroup variant="flush">
                <ListGroup.Item className="px-0 py-3 d-flex align-items-start border-bottom">
                  <Badge bg="success" className="me-3 mt-1 px-2 py-2 rounded-circle"> </Badge>
                  <div>
                    <p className="mb-0 fw-semibold text-dark">Se finalizaron los proyectos pendientes</p>
                    <small className="text-muted">Hace 2 horas</small>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="px-0 py-3 d-flex align-items-start border-bottom">
                  <Badge bg="info" className="me-3 mt-1 px-2 py-2 rounded-circle"> </Badge>
                  <div>
                    <p className="mb-0 fw-semibold text-dark">Noel finalizó el apartado "Mi perfil"</p>
                    <small className="text-muted">Hoy a las 10:30 AM</small>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="px-0 py-3 d-flex align-items-start">
                  <Badge bg="warning" className="me-3 mt-1 px-2 py-2 rounded-circle"> </Badge>
                  <div>
                    <p className="mb-0 fw-semibold text-dark">Cambios en la estructura del entorno ("detalles")</p>
                    <small className="text-muted">Ayer</small>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} lg={4}>
          <Card className="border-0 shadow-sm rounded-4 h-100" style={{ backgroundColor: '#f8f9fa' }}>
            <Card.Body className="p-4">
              <h5 className="fw-bold text-dark mb-4">Información del Grupo</h5>
              
              <div className="d-flex align-items-center mb-4">
                <div className="fs-3 me-3 text-center" style={{ width: '40px', color: '#8A2BE2' }}>
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">Cátedra de APU</h6>
                  <small className="text-muted">Ciclo Lectivo 2026</small>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div className="fs-4 me-3 text-center" style={{ width: '40px', color: '#8A2BE2' }}>
                  <i className="fas fa-users"></i>
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">Grupo 16</h6>
                  <small className="text-muted">5 integrantes activos</small>
                </div>
              </div>

              <hr className="my-4 text-muted opacity-25" />
              
              <div>
                <div className="d-flex justify-content-between mb-2">
                  <span className="fw-bold text-dark" style={{ fontSize: '0.9rem' }}>Progreso de Entregas</span>
                  <span className="fw-bold" style={{ color: '#8A2BE2', fontSize: '0.9rem' }}>{porcentajeProgreso}%</span>
                </div>
                <ProgressBar 
                  now={porcentajeProgreso} 
                  style={{ height: '8px', backgroundColor: '#e9ecef' }} 
                >
                  <ProgressBar now={porcentajeProgreso} style={{ backgroundColor: '#8A2BE2' }} />
                </ProgressBar>
                <small className="text-muted d-block mt-2">
                  {finalizados.length} de {totalProyectos} proyectos completados
                </small>
              </div>
              
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
};

export default Dashboard;