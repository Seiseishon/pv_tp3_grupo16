import { NavLink } from 'react-router-dom';
import style from '../css/Nav.module.css';

const Nav = () => {
  return (
    <nav className={style.navHeader}>
      <NavLink to='/'>Inicio</NavLink>
      <NavLink to='/proyectos'>Proyectos</NavLink>
      <NavLink to='/perfil'>Perfil</NavLink>
    </nav>
  );
};

export default Nav;