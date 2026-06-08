import { Container, Row, Col } from 'react-bootstrap';
import styles from '../css/Footer.module.css';

const Footer = () => {
  return (
    <footer className={`${styles.footer} pt-5`}>
      <Container>
        <Row className="gy-4 text-center text-md-start">
          
          <Col xs={12} md={6} lg={3}>
            <h5 className={`${styles.titulo} mb-3 fs-5 text-uppercase`}>UNJUPROYECT</h5>
            <p className="small lh-base mb-0">
              Plataforma académica para la gestión y visualización de proyectos de Analista Programador Universitario.
            </p>
          </Col>

          <Col xs={12} md={6} lg={3}>
            <h5 className={`${styles.titulo} mb-3 fs-5 text-uppercase`}>CONTACTANOS</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 small mb-0">
              <li>
                <a href="tel:+543883465789" className={styles.linkContacto}>
                  <i className="fas fa-phone me-2"></i> 388 346-5789
                </a>
              </li>
              <li>
                <a href="mailto:contacto@unjuproyect.edu.ar" className={styles.linkContacto}>
                  <i className="fas fa-envelope me-2"></i> contacto@unjuproyect.edu.ar
                </a>
              </li>
              <li className="lh-sm">
                <i className="fas fa-map-marker-alt me-2"></i> Ítalo Palanca 10 San Salvador de Jujuy
              </li>
            </ul>
          </Col>

          <Col xs={12} md={6} lg={3}>
            <h5 className={`${styles.titulo} mb-3 fs-5 text-uppercase`}>DESARROLLO</h5>
            <p className="small mb-1">Grupo 16 • Cátedra de APU</p>
            <p className="small mb-0">UNJU</p>
          </Col>

          <Col xs={12} md={6} lg={3}>
            <h5 className={`${styles.titulo} mb-3 fs-5 text-uppercase`}>SEGUINOS</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-4 fs-4">
              <a href="#facebook" className={styles.iconoRed}>
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#linkedin" className={styles.iconoRed}>
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#github" className={styles.iconoRed}>
                <i className="fab fa-github"></i>
              </a>
              <a href="#instagram" className={styles.iconoRed}>
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </Col>

        </Row>
      </Container>

      <div className={`${styles.copyright} text-center py-3 mt-5`}>
        <Container>
          <p className="mb-0 small">© 2026 Gestión de Proyectos Educativos. Todos los derechos reservados.</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;