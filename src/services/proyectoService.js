const proyectoService = (() => {
    
    let proyectos = [
        {id:1,titulo:"Open Market", categoria: "Aplicación Web", estado: "Finalizado"},
        {id:2,titulo:"Mercado Liebre", categoria: "Aplicación Web", estado: "Finalizado"},
        {id:3,titulo:"Aplicación de Películas", categoria: "Aplicación Web", estado: "Finalizado"},
        {id:4,titulo:"Aplicación de clima", categoria: "Aplicación Web", estado: "Finalizado"},
        {id:5,titulo:"Espejo Mágico", categoria: "Juego", estado: "Finalizado"}
    ];

    const obtenerProyectos = () => [...proyectos];

    const agregarProyecto = proyecto => proyectos.push(proyecto); 

    const eliminarProyecto = id => proyectos = proyectos.filter(p => p.id !== id);

    const buscarProyectos = txt => proyectos.filter(p => p.titulo.toLowerCase().includes(txt.toLowerCase()));

    return {
        obtenerProyectos,
        agregarProyecto,
        eliminarProyecto,
        buscarProyectos
    };

})();

export default proyectoService;