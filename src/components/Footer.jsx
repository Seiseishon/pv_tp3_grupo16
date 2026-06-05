import style from '../css/Footer.module.css';

const Footer = () => {
    return (
        <footer className={style.footerGlobal}>
            <div className={style.footerContent}>
                <div className={style.footerSection}>
                    <h4 className={style.tituloH4}>UNJUPROYECT</h4>
                    <p className={style.parrafoFooter}>Plataforma académica para la gestión y visualización de proyectos de Analista Programador Universitario.</p>
                </div>

                <div className={style.footerSection}>
                    <h4 className={style.tituloH4}>Contactanos</h4>

                    <ul className={style.contactInfo}>
                        <li className={style.informacion}>
                            <i className="fa-solid fa-phone"></i>
                            <a className={style.link} href="tel:3883465789">388 346-5789</a>
                        </li>
                        <li className={style.informacion}>
                            <i className="fa-solid fa-envelope"></i>
                            <a className={style.link} href="mailto:contacto@unjuproyect.edu.ar">contacto@unjuproyect.edu.ar</a>
                        </li>
                        <li className={style.informacion}>
                            <i className="fa-solid fa-location-dot"></i>
                            <span className={style.spanFooter}>Ítalo Palanca 10 San Salvador de Jujuy</span>
                        </li>
                    </ul>

                </div>

                <div className={style.footerSection}>
                    <h4 className={style.tituloH4}>Desarrollo</h4>
                    <p className={style.parrafoFooter}>Grupo 16 • Cátedra de APU</p>
                    <p className={style.parrafoFooter}>UNJU</p>
                </div>

                <div className={style.socialIcons}>
                    <a href="#" className={style.iconLink} title="Facebook">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="#" className={style.iconLink} title="LinkedIn">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="#" className={style.iconLink} title="GitHub">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="#" className={style.iconLink} title="Instagram">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>

            <div className={style.footerBottom}>
                <p>&copy; 2026 Gestión de Proyectos Educativos. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;