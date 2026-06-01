import { useState } from 'react';
import style from '../css/ListaProyectos.module.css';
import proyectoService from '../services/proyectoService';
import ProyectoCard from './ProyectoCard';

const ListaProyectos = ({ alSeleccionarProyecto }) => {
  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());

  const [formulario, setformulario] = useState({
    titulo: "",
    categoria: "",
    estado: "Pendiente",
    descripcionExtendida: "",
    github: "",
    pdf: "",
    drive: "",
    equipoNombre: ""
  })

  const { titulo, categoria, estado, descripcionExtendida, github, pdf, drive, equipoNombre } = formulario;

  const cambioInput = (e) => {
    const { name, value } = e.target;
    setformulario({
      ...formulario,
      [name]: value
    });
  };

  const manejarAgregar = (e) => {
    e.preventDefault();

    if (titulo.trim() === '' || categoria.trim() === '') return;

    const nuevoProyecto = {
      id: Date.now(),
      titulo,
      categoria,
      estado,
      imagen: "",
      descripcionExtendida: descripcionExtendida || "Sin descripción asignada.",
      descripcionExtendida2: "",
      tecnologias: ["Tecnología a definir"],
      funcionalidades: ["Funcionalidad a definir"],
      links: {
        pdf: pdf || "",
        drive: drive || "",
        github: github || ""
      },
      equipo: equipoNombre ? [{ nombre: equipoNombre, rol: "Líder" }] : []
    };

    proyectoService.agregarProyecto(nuevoProyecto);
    setProyectos(proyectoService.obtenerProyectos());

    setformulario({
      titulo: "", categoria: "", estado: "Pendiente",
      descripcionExtendida: "", github: "", pdf: "", drive: "", equipoNombre: ""
    })
  };

  const eliminarProyecto = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos());
  }

  const manejarBusqueda = (e) => {
    const texto = e.target.value;
    if (texto === '') {
      setProyectos(proyectoService.obtenerProyectos());
    } else {
      setProyectos(proyectoService.buscarProyecto(texto));
    }
  };

  return (
    <>
      <h2 className={style.tituloProyectos}>Listado de Proyectos</h2>

      <div className={style.agregarProyecto}>

        <h3 className={style.tituloH3}> Agregar Nuevo Proyecto</h3>

        <form onSubmit={manejarAgregar} className={style.formulario}>

          <div className={style.contenedorCampos}>

            <input className={style.campos} type="text" name="titulo" placeholder="Título" value={titulo} onChange={cambioInput} />
            <input className={style.campos} type="text" name="categoria" placeholder="Categoría" value={categoria} onChange={cambioInput} />
            <select className={style.campos} name="estado" value={estado} onChange={cambioInput}>
              <option value="Pendiente">Pendiente</option>
              <option value="En progreso">En progreso</option>
              <option value="Finalizado">Finalizado</option>
            </select>

          </div>

          <textarea className={style.campoTarea} name="descripcionExtendida" placeholder="Escribe una breve descripción del proyecto..." value={descripcionExtendida} onChange={cambioInput} />

          <div className={style.contenedorCampos}>

            <input className={style.camposLinks} type="text" name="github" placeholder="Enlace GitHub" value={github} onChange={cambioInput} />
            <input className={style.camposLinks} type="text" name="pdf" placeholder="Enlace PDF" value={pdf} onChange={cambioInput} />
            <input className={style.camposLinks} type="text" name="drive" placeholder="Enlace Drive" value={drive} onChange={cambioInput} />
            <input className={style.camposLinks} type="text" name="equipoNombre" placeholder="Integrante" value={equipoNombre} onChange={cambioInput} />

            <button className={style.btnAgregar} type="submit">Agregar Proyecto</button>

          </div>

        </form>
      </div>

      <hr />

      <div className={style.buscador}>
        <input
          className={style.inputBuscador}
          type="text"
          placeholder="Buscar proyecto por título..."
          onChange={manejarBusqueda}
        />
      </div>

      <div className={style.contenedorProyectos}>
        {proyectos.map((proyecto) => (
          <ProyectoCard
            key={proyecto.id}
            proyecto={proyecto}
            onEliminar={eliminarProyecto}
            onVerDetalle={alSeleccionarProyecto}
          />
        ))}
      </div>
    </>
  );
};

export default ListaProyectos;