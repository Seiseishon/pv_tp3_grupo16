import { Container } from 'react-bootstrap';
import styles from '../css/Header.module.css';
import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <header className={`${styles.headerCompact} py-5 mb-4 shadow`}>
      <Container className="text-center">
        
        <div className="mb-3 d-flex justify-content-center">
          <img 
            src={logo} 
            alt="Logo Gestión de Proyectos" 
            style={{ 
              height: '150px',
              objectFit: 'contain'
            }}
          />
        </div>

        <h1 className="display-5 text-white fw-bold mb-3 mt-2">
          Gestión de <span className={styles.tituloDestacado}>Proyectos</span>
        </h1>
        
        <p className="lead text-white mb-3 w-75 mx-auto fs-5">
          Plataforma académica para la visualización y administración de trabajos de Analista Programador Universitario.
        </p>
        
      </Container>
    </header>
  );
};

export default Header;