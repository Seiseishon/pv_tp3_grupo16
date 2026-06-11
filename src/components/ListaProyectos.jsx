import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import style from '../css/ListaProyectos.module.css';
import proyectoService from '../services/proyectoService';
import ProyectoCard from './ProyectoCard';
import FormularioProyecto from './FormularioProyecto';
import RegistroActividad from './RegistroActividad';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ListaProyectos = ({ alSeleccionarProyecto }) => {
  const location = useLocation();
  const filtroInicial = location.state?.filtroEstado || 'Todos';
  const [filtroActual, setFiltroActual] = useState(filtroInicial);

  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
  const [proyectosFiltrados, setProyectosFiltrados] = useState([]); 
  const [fechaRegistro, setFechaRegistro] = useState(null);

  const primerRender = useRef(true);

  useEffect(() => {
    let lista = proyectoService.obtenerProyectos();
    if (filtroActual !== 'Todos') {
      lista = lista.filter(p => p.estado === filtroActual);
    }
    setProyectosFiltrados(lista);
  }, [filtroActual, proyectos]);

  useEffect(() => {
    if (primerRender.current) {
      primerRender.current = false;
      return;
    }
    const fechaActual = new Date();
    setFechaRegistro(fechaActual);
    console.log("Se detectó un cambio en proyectos. Fecha capturada:", fechaActual);
  }, [proyectos]);

  const agregarProyecto = (nuevoProyecto) => {
    proyectoService.agregarProyecto(nuevoProyecto);
    setProyectos(proyectoService.obtenerProyectos());
  };

  const eliminarProyecto = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos());
  }

  const manejarBusqueda = (e) => {
    const texto = e.target.value.toLowerCase();
    
    let base = proyectoService.obtenerProyectos();
    if (filtroActual !== 'Todos') {
      base = base.filter(p => p.estado === filtroActual);
    }

    if (texto === '') {
      setProyectosFiltrados(base);
    } else {
      const filtradosPorTexto = base.filter(p => p.titulo.toLowerCase().includes(texto));
      setProyectosFiltrados(filtradosPorTexto);
    }
  };

  const limpiarFiltro = () => {
    setFiltroActual('Todos');
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className={style.tituloProyectos}>Listado de Proyectos</h2>
        
        {filtroActual !== 'Todos' && (
          <Button variant="outline-secondary" size="sm" onClick={limpiarFiltro}>
            <i className="fas fa-times me-2"></i> Limpiar Filtro ({filtroActual})
          </Button>
        )}
      </div>

      <FormularioProyecto onAgregarProyecto={agregarProyecto} />

      <hr />

      <div className={style.buscador}>
        <input
          className={style.inputBuscador}
          type="text"
          placeholder="Buscar proyecto por título..."
          onChange={manejarBusqueda}
        />
      </div>

      <Container className="mt-4 mb-5">
        {proyectosFiltrados.length === 0 ? (
          <div className="text-center text-muted py-4">
             <i className="fas fa-folder-open fs-2 mb-2 opacity-50"></i>
             <p>No se encontraron proyectos en esta categoría.</p>
          </div>
        ) : (
          <Row className="g-4">
            {proyectosFiltrados.map((proyecto) => (
              <Col key={proyecto.id} xs={12} md={6} lg={4}>
                <ProyectoCard
                  proyecto={proyecto}
                  onEliminar={eliminarProyecto}
                  onVerDetalle={alSeleccionarProyecto}
                />
              </Col>
            ))}
          </Row>
        )}
      </Container>
      
      <hr/>

      {fechaRegistro && (<RegistroActividad fecha={fechaRegistro}/>)}
    </>
  );
};

export default ListaProyectos;