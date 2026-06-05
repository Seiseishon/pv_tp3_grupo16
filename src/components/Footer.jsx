const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
            <div className="footer-section">
                <h4>UNJUPROYECT</h4>
                <p>Plataforma académica para la gestión y visualización de proyectos de Analista Programador Universitario.</p>
            </div>
        
            <div className="footer-section">
                <h4>Contactanos</h4>
                    <ul className="contact-info">
                    <li>
                        <i className="fa-solid fa-phone"></i>
                        <a href="tel:3883465789">388 346-5789</a>
                    </li>
                    <li>
                        <i className="fa-solid fa-envelope"></i>
                        <a href="mailto:contacto@unjuproyect.edu.ar">contacto@unjuproyect.edu.ar</a>
                    </li>
                    <li>
                        <i className="fa-solid fa-location-dot"></i>
                        <span>Ítalo Palanca 10 San Salvador de Jujuy</span>
                    </li>
                    </ul>
            </div>
        
            <div className="footer-section">
                <h4>Desarrollo</h4>
                <p>Grupo 16 • Cátedra de APU</p>
                <p>UNJU</p>
            </div>

            <div className="social-icons">
                <a href="#" className="icon-link" title="Facebook">
                <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="#" className="icon-link" title="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="#" className="icon-link" title="GitHub">
                <i className="fa-brands fa-github"></i>
                </a>
                <a href="#" className="icon-link" title="Instagram">
                <i className="fa-brands fa-instagram"></i>
                </a>
            </div>
        </div>
    
        <div className="footer-bottom">
            <p>&copy; 2026 Gestión de Proyectos Educativos. Todos los derechos reservados.</p>
        </div>
    </footer>
  );
};

export default Footer;