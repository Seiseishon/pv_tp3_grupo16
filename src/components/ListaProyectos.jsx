import { useState, useEffect, useRef } from 'react';
import style from '../css/ListaProyectos.module.css';
import proyectoService from '../services/proyectoService';
import ProyectoCard from './ProyectoCard';
import FormularioProyecto from './FormularioProyecto';
import RegistroActividad from './RegistroActividad';
import { Container, Row, Col } from 'react-bootstrap';

const ListaProyectos = ({ alSeleccionarProyecto }) => {
  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
  const [proyectosFiltrados, setProyectosFiltrados] = useState(proyectoService.obtenerProyectos());

  const [fechaRegistro, setFechaRegistro] = useState(null);

  const primerRender = useRef(true);

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
    setProyectosFiltrados(proyectoService.obtenerProyectos());
  };

  const eliminarProyecto = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos());
    setProyectosFiltrados(proyectoService.obtenerProyectos());
  }

  const manejarBusqueda = (e) => {
    const texto = e.target.value;
    if (texto === '') {
      setProyectosFiltrados(proyectoService.obtenerProyectos());
    } else {
      setProyectosFiltrados(proyectoService.buscarProyecto(texto));
    }
  };

  return (
    <>
      <h2 className={style.tituloProyectos}>Listado de Proyectos</h2>

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
      </Container>
      
      <hr/>

      {fechaRegistro && (<RegistroActividad fecha={fechaRegistro}/>)}
    </>
  );
};

export default ListaProyectos;