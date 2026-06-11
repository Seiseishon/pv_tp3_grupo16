import { Container, Row, Col, Card, Image, Badge } from 'react-bootstrap';
import styles from '../css/PerfilEquipo.module.css';

const Perfil = () => {
  const equipo = [
    { 
      id: 1, 
      nombres: 'Noel Silvio Raul',
      apellidos: 'Chiliguay',
      iniciales: 'NC', 
      rol: 'Junior Frontend Developer',
      foto: '/fotos-equipo/noel.jpeg',
      github: 'https://github.com', 
      linkedin: 'https://linkedin.com',
      skills: ['Css', 'React', 'JavaScrip']
    },
    { 
      id: 2, 
      nombres: 'Nelson Fabian',
      apellidos: 'Ramos',
      iniciales: 'NR', 
      rol: 'Junior Frontend Developer',
      foto: '/fotos-equipo/nelson.jpeg',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      skills: ['C++', 'java', 'Python']
    },
    { 
      id: 3, 
      nombres: 'Maximiliano Mauricio',
      apellidos: 'Villarreal',
      iniciales: 'MV', 
      rol: 'Junior Frontend Developer',
      foto: '/fotos-equipo/Mauricio.jpg',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      skills: ['Python', 'C++', 'Bootstrap']
    },
    { 
      id: 4, 
      nombres: 'Sergio Saul Alex',
      apellidos: 'Soza',
      iniciales: 'SS', 
      rol: 'Junior Frontend Developer',
      foto: '/fotos-equipo/sergio.jpg',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      skills: ['Angular', 'MySQL', 'Css']
    },
    { 
      id: 5, 
      nombres: 'Franco Gabriel',
      apellidos: 'Sanchez Amaya',
      iniciales: 'FA', 
      rol: 'Junior Frontend Developer',
      foto: '/fotos-equipo/franco.jpeg',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      skills: ['JavaScript', 'C++', 'React', "SQL"]
    }
  ];

  return (
    <Container className="py-5">
      <div className="text-center mb-5 mt-3">
        <h2 className="display-5 fw-bold text-dark mb-2">
          Equipo de <span style={{ color: '#8A2BE2' }}>Desarrollo</span>
        </h2>
        <p className="text-muted fs-5 mb-0">Analista Programador Universitario • Grupo 16</p>
      </div>

      <Row className="g-4 justify-content-center">
        {equipo.map((miembro) => (
          <Col xs={12} sm={6} md={4} lg={4} key={miembro.id}>
            <Card 
              className={`h-100 shadow-lg border-0 rounded-4 text-center p-4 ${styles?.cardPerfil || ''}`}
              style={{ backgroundColor: '#0c0c0c' }}
            >
              
              <div className={styles?.portadaCard || ''}></div>

              <div className={styles?.avatarRing || ''} style={{ backgroundColor: '#0c0c0c' }}>
                {miembro.foto ? (
                  <Image 
                    src={miembro.foto} 
                    alt={`Foto de ${miembro.nombres}`}
                    roundedCircle
                    className="w-100 h-100 object-fit-cover" 
                  />
                ) : (
                  <div className={styles?.placeholderAvatar || ''}>
                    {miembro.iniciales}
                  </div>
                )}
              </div>

              <Card.Title className="fw-bold fs-5 text-white mb-3 px-2 lh-sm">
                <span className="d-block">{miembro.nombres}</span>
                <span className="d-block">{miembro.apellidos}</span>
              </Card.Title>
              
              <div className="w-25 mx-auto mb-3" style={{ height: '3px', backgroundColor: '#8A2BE2', borderRadius: '2px' }}></div>
              
              <Card.Text className="fw-semibold mb-3 text-center" style={{ color: '#b266ff', fontSize: '0.95rem' }}>
                {miembro.rol}
              </Card.Text>

              <div className="d-flex justify-content-center gap-3 mb-4">
                <a href={miembro.github} target="_blank" rel="noopener noreferrer" className={styles?.iconLink || ''} style={{ color: '#a0a0a0' }}>
                  <i className="fab fa-github fs-4"></i>
                </a>
                <a href={miembro.linkedin} target="_blank" rel="noopener noreferrer" className={styles?.iconLink || ''} style={{ color: '#a0a0a0' }}>
                  <i className="fab fa-linkedin fs-4"></i>
                </a>
              </div>

              <div className="mt-auto d-flex flex-wrap justify-content-center gap-2">
                {miembro.skills?.map((skill, index) => (
                  <Badge 
                    key={index} 
                    bg="dark" 
                    text="light" 
                    className="border border-secondary px-2 py-1 fw-normal"
                    style={{ fontSize: '0.75rem' }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Perfil;