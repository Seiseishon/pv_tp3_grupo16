import { useState } from 'react';
import proyectoService from '../services/proyectoService';
import ProyectoCard from './ProyectoCard';
import { useEffect } from 'react';

const ListaProyectos = ({ alSeleccionarProyecto }) => {
  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());

  const [formulario, setformulario] = useState ({
    titulo: "",
    categoria: "",
    estado: "Pendiente",
    descripcionExtendida: "", 
    github: "",
    pdf: "",            
    drive: "",          
    equipoNombre: ""   
  })

  const [fechaRegistro, setFechaRegistro] = useState(null);

  useEffect(() => {
    const fechaActual = new Date();
    
    setFechaRegistro(fechaActual);
    
    console.log("Se detectó un cambio en proyectos. Fecha capturada:", fechaActual);
    
  }, [proyectos]);

  const {titulo, categoria, estado, descripcionExtendida, github, pdf, drive, equipoNombre} = formulario;

  const cambioInput = (e) => {
    const {name,value} = e.target;
    setformulario ({
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

    setformulario ({
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
      <h2 className='titulo-proyectos'>Listado de Proyectos</h2>
      
      <div style={{
        backgroundColor: '#fbf8ff', 
        padding: '25px',
        borderRadius: '12px',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.04)',
        border: '1px solid #ede7f6',
        marginBottom: '40px'
      }}>
        <h3 style={{ marginTop: 0, color: '#4a148c', marginBottom: '20px', fontSize: '1.4rem' }}>
          Agregar Nuevo Proyecto
        </h3>
        
        <form onSubmit={manejarAgregar} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <input type="text" name="titulo" placeholder="Título" value={titulo} onChange={cambioInput} 
                   style={{ flex: 1, minWidth: '150px', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}/>
            <input type="text" name="categoria" placeholder="Categoría" value={categoria} onChange={cambioInput} 
                   style={{ flex: 1, minWidth: '150px', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}/>
            <select name="estado" value={estado} onChange={cambioInput} 
                    style={{ flex: 1, minWidth: '150px', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', backgroundColor: '#fff' }}>
              <option value="Pendiente">Pendiente</option>
              <option value="En progreso">En progreso</option>
              <option value="Finalizado">Finalizado</option>
            </select>
          </div>

          <textarea name="descripcionExtendida" placeholder="Escribe una breve descripción del proyecto..." value={descripcionExtendida} onChange={cambioInput} 
                    style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', resize: 'vertical', minHeight: '80px', fontFamily: 'inherit', boxSizing: 'border-box' }} />

          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', alignItems: 'center' }}>
            <input type="text" name="github" placeholder="Enlace GitHub" value={github} onChange={cambioInput} 
                   style={{ flex: 1, minWidth: '130px', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}/>
            <input type="text" name="pdf" placeholder="Enlace PDF" value={pdf} onChange={cambioInput} 
                   style={{ flex: 1, minWidth: '130px', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}/>
            <input type="text" name="drive" placeholder="Enlace Drive" value={drive} onChange={cambioInput} 
                   style={{ flex: 1, minWidth: '130px', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}/>
            <input type="text" name="equipoNombre" placeholder="Integrante" value={equipoNombre} onChange={cambioInput} 
                   style={{ flex: 1, minWidth: '130px', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}/>
            
            <button type="submit" style={{ 
              backgroundColor: '#28a745', 
              color: 'white', 
              padding: '12px 24px', 
              border: 'none', 
              borderRadius: '8px', 
              fontWeight: 'bold', 
              cursor: 'pointer', 
              flex: 1, 
              minWidth: '200px',
              boxShadow: '0 4px 6px rgba(40, 167, 69, 0.2)' 
            }}>
              Agregar Proyecto
            </button>
          </div>
        </form>
      </div>

      <hr />

      <div className="buscador" style={{ marginTop: '20px', marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Buscar proyecto por título..." 
          onChange={manejarBusqueda}
          style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
        />
      </div>

      <div className="contenedor-proyectos">
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