import style from '../css/Nav.module.css';

const Nav = () => {
  return (
    <nav className={style.navHeader}>
      <a href="/">Inicio</a>
      <a href="#">Proyectos</a>
      <a href="#">Perfil</a>
    </nav>
  );
};

export default Nav;