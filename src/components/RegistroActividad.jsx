import { Alert } from 'react-bootstrap';  

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
    <Alert variant="info"  className="mt-3">
      {mensajeFormateado}
    </Alert>
  );
}

export default RegistroActividad;