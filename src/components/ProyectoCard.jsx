import style from '../css/ProyectoCard.module.css';

const ProyectoCard = ({ proyecto, onEliminar, onVerDetalle }) => {
    const { titulo, categoria, estado, id } = proyecto;

    return (
        <div className={style.cardProyecto}>
            <h3 className={style.tituloH3}>{titulo}</h3>
            <p className={style.parrafoCard}><strong>Categoría:</strong> {categoria}</p>
            <p className={style.parrafoCard}><strong>Estado:</strong> {estado}</p>
            <button className={style.btnDetalle} onClick={() => onVerDetalle(id)}>Ver Detalle</button>
            <button className={style.btnEliminar} onClick={() => onEliminar(id)}>Eliminar</button>
        </div>
    );

};

export default ProyectoCard;