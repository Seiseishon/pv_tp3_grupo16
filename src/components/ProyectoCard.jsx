const ProyectoCard = ({ proyecto, onEliminar, onVerDetalle }) => {
    const { titulo, categoria, estado, id } = proyecto;

    return (
        <div className="card-proyecto">
            <h3>{titulo}</h3>
            <p><strong>Categoría:</strong> {categoria}</p>
            <p><strong>Estado:</strong> {estado}</p>
            
            <button onClick={() => onVerDetalle(id)} style={{backgroundColor: '#8A2BE2', color: 'white', marginBottom: '8px', width: '100%', padding:'10px', border: 'none',  borderRadius: '8px'}}>

            Ver Detalle
            </button>

            <button onClick={() => onEliminar(id)} style={{ backgroundColor: '#ff4757', color: 'white', width: '100%', padding: '10px', border: 'none', borderRadius: '8px'}}>

            Eliminar
            </button>
        </div>
    );

};

export default ProyectoCard;