import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import style from '../css/Nav.module.css';
import { UsuarioContext } from '../context/UsuarioContext';

const Nav = () => {
  const { usuario } = useContext(UsuarioContext);

  return (
    <nav className={`${style.navHeader} py-3 border-0`}>
      
      <Container fluid className="d-flex justify-content-end align-items-center gap-4 pe-5">
        
        <div className="d-flex align-items-center gap-4 text-uppercase fw-bold" style={{ fontSize: '0.85rem', letterSpacing: '1px' }}>
          <NavLink to='/' className="text-white text-decoration-none">Inicio</NavLink>
          <NavLink to='/proyectos' className="text-white text-decoration-none">Proyectos</NavLink>
          <NavLink to='/perfil' className="text-white text-decoration-none">Perfil</NavLink>
          <NavLink to='/perfilEquipo' className="text-white text-decoration-none">Acerca De Nosotros</NavLink>
        </div>

        <div className="vr text-white opacity-25" style={{ height: '30px', width: '2px' }}></div>

        <div className="d-flex align-items-center gap-3">
          <div className="text-end">
            <div className="text-white fw-bold lh-1 mb-1" style={{ fontSize: '0.95rem' }}>
              {usuario.nombre}
            </div>
            <div className="text-white-50 lh-1" style={{ fontSize: '0.75rem' }}>
              {usuario.rol}
            </div>
          </div>
          <div className="bg-white bg-opacity-25 rounded-circle d-flex justify-content-center align-items-center" style={{ width: '38px', height: '38px' }}>
            <i className="fas fa-user text-white"></i>
          </div>
        </div>

      </Container>
    </nav>
  );
};

export default Nav;