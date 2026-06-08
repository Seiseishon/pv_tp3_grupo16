import { Container } from 'react-bootstrap';
import styles from '../css/Header.module.css';

const Header = () => {
  return (
    
    <header className={`${styles.headerCompact} py-5 mb-4 shadow`}>
      <Container className="text-center">
        
        <div className="mb-3">
          <i class="fa-regular fa-clipboard" style={{ fontSize: '3.5rem', color: '#8A2BE2' }}></i>
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