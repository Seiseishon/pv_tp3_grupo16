import style from '../css/Header.module.css';

const Header = () => {
  return (
    <header className={style.headerGlobal}>
      <div className={style.headerContent}>
        <h1 id={style.tituloH1}>Gestión de Proyectos y Trabajos UNJUPROYECT</h1>
        <div className={style.proyectoInfo}>
          <p>Optimice su flujo de trabajo con nuestra plataforma centralizada de seguimiento académico.</p>
          <p>Manejado por el Grupo 16 • Cátedra de APU.</p>
        </div>

      </div>
    </header>
  );
};

export default Header;