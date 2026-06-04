
function RegistroActividad(props) {
  if (!props.fecha) return null;

  const fechaObjeto = new Date(props.fecha);

  const dia = String(fechaObjeto.getDate()).padStart(2, '0');
  const mes = String(fechaObjeto.getMonth() + 1).padStart(2, '0');
  const anio = fechaObjeto.getFullYear();

  const horas = String(fechaObjeto.getHours()).padStart(2, '0');
  const minutos = String(fechaObjeto.getMinutes()).padStart(2, '0');

  const mensajeFormateado = `Última actualización de la lista: ${dia}/${mes}/${anio} a las ${horas}:${minutos} hs.`;

  return (
    <div style={estilos.contenedor}>
      <p style={estilos.texto}>{mensajeFormateado}</p>
    </div>
  );
}

const estilos = {
  contenedor: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#f0f4f8',
    borderLeft: '4px solid #0076ff',
    borderRadius: '4px',
  },
  texto: {
    margin: 0,
    color: '#333',
    fontWeight: '500',
    fontSize: '14px',
  }
};

export default RegistroActividad;