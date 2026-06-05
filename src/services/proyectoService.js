import imgOpenMarket from '../assets/images/OpenMarketLogo_4.png';
import imgMercadoLiebre from '../assets/images/logo-mercado-liebre.svg';
import imgPeliculas from '../assets/images/pelicula.ico';
import imgClima from '../assets/images/clima.ico';
import imgEspejo from '../assets/images/espejo.ico';

const proyectoService = (() => {
    
    let proyectos = [
        {
            id: 1,
            titulo: "Open Market", 
            categoria: "Aplicación Web", 
            estado: "Finalizado",
            imagen: imgOpenMarket,
            descripcion: "Open Market es una plataforma de e-commerce desarrollada con HTML, CSS y JavaScript. Su diseño, centrado en tonos morados, busca ofrecer una experiencia visual moderna y una navegación fluida para que los usuarios exploren productos fácilmente.\n\nLa interfaz cuenta con diseño responsive mediante Flexbox y manipulación dinámica del DOM. Incorpora un carrito de compras interactivo, filtros de búsqueda y simulación de inicio de sesión, demostrando un uso avanzado de lógica del lado del cliente.",
            tecnologias: [
                "HTML5 & CSS3: Utilizados para la estructura visual del sitio, diseño responsivo y maquetación de las secciones de productos y navegación.",
                "JavaScript: Implementación de funcionalidades dinámicas como interacción con botones, visualización de productos y manipulación del DOM.",
                "Diseño Responsive: Adaptación de la interfaz para distintos tamaños de pantalla utilizando Flexbox y buenas prácticas de diseño web."
            ],
            funcionalidades: [
                "Visualización dinámica de productos organizados por categorías.",
                "Navegación interactiva entre distintas secciones del e-commerce.",
                "Interfaz adaptable a dispositivos móviles y de escritorio.",
                "Carrito de compras.",
                "Filtros de productos.",
                "Simulación de login.",
                "Catálogo dinámico."
            ],
            links: {
                pdf: "https://ejemplo.com/doc-openmarket.pdf",
                drive: "https://drive.google.com/openmarket",
                github: "https://github.com/Seiseishon/grupo_9_Tienda"
            },
            equipo: [
                { nombre: "Mauricio Maximiliano Villarreal", rol: "Líder" },
                { nombre: "Noel Silvio Raul Chiliguay", rol: "Ayudante" },
                { nombre: "Franco Gabriel Sanchez Ayama", rol: "Ayudante" }
            ]
        },
        {
            id: 2,
            titulo: "Mercado Liebre", 
            categoria: "Aplicación Web", 
            estado: "Finalizado",
            imagen: imgMercadoLiebre,
            descripcion: "Este proyecto es una réplica funcional de la plataforma Mercado Libre, orientada a la simulación de compra y venta de productos. Utiliza CSS Grid y Flexbox para lograr un catálogo totalmente adaptable a cualquier dispositivo móvil o de escritorio.\n\nLa lógica interactiva se implementó con JavaScript Vanilla, gestionando el carrito y validando formularios en tiempo real. Además, incluye una etapa de integración con Node.js y Express para simular el enrutamiento de un servidor real.",
            tecnologias: [
                "HTML5 & CSS3 Avanzado: Uso de Flexbox y CSS Grid para diseñar toda la botonera y el catálogo de productos adaptables a celulares.",
                "JavaScript Vanilla: Toda la lógica interactiva para el manejo del carrito de compras y cálculo de precios totales.",
                "Node.js & Express: Utilizado en la etapa previa para el manejo de las rutas de productos y simulación del servidor."
            ],
            funcionalidades: [
                "Formulario de registro e inicio de sesión de usuarios con validaciones de campos vacíos.",
                "Buscador de productos en tiempo real con filtrado dinámico por categoría, precio y relevancia.",
                "Carrusel interactivo de ofertas destacadas en la pantalla de inicio y sistema de añadir productos al carrito."
            ],
            recursos: {
                pdf: "https://ejemplo.com/doc-mercadoliebre.pdf",
                drive: "https://drive.google.com/mercadoliebre",
                github: "https://github.com/Seiseishon/Mercado-Liebre"
            },
            equipo: [
                { nombre: "Nelson Fabian Ramos", rol: "Líder" },
                { nombre: "Sergio Saul Alex Soza", rol: "Ayudante" }
            ]
        },
        {
            id: 3,
            titulo: "Aplicación de Películas", 
            categoria: "Aplicación Web", 
            estado: "Finalizado",
            imagen: imgPeliculas,
            descripcion: "Esta plataforma interactiva permite a los amantes del cine explorar tendencias y organizar sus películas favoritas. Se centra en el consumo eficiente de la API externa The Movie Database (TMDB) mediante asincronismo con Async/Await y Fetch.\n\nEl proyecto destaca por mostrar detalles y tráilers de YouTube en ventanas modales dinámicas. También incluye un sistema de almacenamiento en LocalStorage, permitiendo a los usuarios guardar listas personalizadas de manera persistente.",
            tecnologias: [
                "Consumo de API Externa (The Movie Database - TMDB)",
                "Asincronismo puro mediante Async/Await y Fetch",
                "Filtros dinámicos basados en géneros de películas"
            ],
            funcionalidades: [
                "Renderizado en tiempo real de los pósters oficiales y calificaciones del público.",
                "Sección de 'Favoritos' guardada de forma persistente en el LocalStorage.",
                "Ventana modal con la sinopsis detallada y el tráiler de YouTube al hacer clic."
            ],
            recursos: {
                pdf: "https://ejemplo.com/doc-peliculas.pdf",
                drive: "https://drive.google.com/peliculas",
                github: "https://github.com/Seiseishon/app-peliculas-reactjs"
            },
            equipo: [
                { nombre: "Noel Silvio Raul Chiliguay", rol: "Líder" },
                { nombre: "Mauricio Maximiliano Villarreal", rol: "Ayudante" }
            ]
        },
        {
            id: 4,
            titulo: "Aplicación de clima", 
            categoria: "Aplicación Web", 
            estado: "Finalizado",
            imagen: imgClima,
            descripcion: "Se trata de un dashboard meteorológico minimalista que brinda pronósticos y alertas climáticas. Su principal atractivo es la integración de la API de OpenWeatherMap combinada directamente con la geolocalización nativa del navegador del usuario.\n\nLa interfaz reacciona a las condiciones ambientales cambiando el fondo de pantalla automáticamente (por ejemplo, mostrando lluvia o cielo despejado). Además, exhibe métricas precisas como velocidad del viento, humedad y sensación térmica.",
            tecnologias: [
                "Integración con la API de OpenWeatherMap",
                "Geolocalización nativa del navegador del usuario",
                "Manipulación dinámica del DOM basada en condiciones ambientales"
            ],
            funcionalidades: [
                "Detección automática de la ubicación del usuario al cargar la pantalla.",
                "Cambio de fondo de pantalla interactivo (si está lloviendo, se ve tormentoso; si es de noche, estrellado).",
                "Métricas detalladas de velocidad del viento, porcentaje de humedad y sensación térmica."
            ],
            recursos: {
                pdf: "https://ejemplo.com/doc-clima.pdf",
                drive: "https://drive.google.com/clima",
                github: "https://github.com/Seiseishon/aplicacion-clima-react"
            },
            equipo: [
                { nombre: "Franco Gabriel Sanchez Ayama", rol: "Líder" },
                { nombre: "Sergio Saul Alex Soza", rol: "Ayudante" }
            ]
        },
        {
            id: 5,
            titulo: "Espejo Mágico", 
            categoria: "Juego", 
            estado: "Finalizado",
            imagen: imgEspejo,
            descripcion: "Espejo Mágico es un juego web interactivo desarrollado en React que pone a prueba la lógica y simetría espacial del jugador. Su mecánica principal exige un control riguroso de estados en tiempo real y el uso eficiente de Hooks.\n\nA nivel visual, cuenta con animaciones fluidas maquetadas con HTML5 y CSS3 para mejorar la experiencia lúdica. Su diseño responsivo garantiza que el tablero de juego se adapte perfectamente a pantallas de celulares, tablets y computadoras.",
            tecnologias: [
                "React & JavaScript (ES6): Implementación de la lógica del juego mediante el uso de hooks, gestión de eventos dinámicos y manipulación eficiente del árbol de componentes.",
                "HTML5 & CSS3: Maquetación estructural del tablero de juego y aplicaciones de estilos personalizados, incluyendo transiciones.",
                "Diseño Responsivo: Adaptación completa de la interfaz para pantallas de teléfonos, tablets y computadoras de escritorio, utilizando Flexbox y CSS grid."
            ],
            funcionalidades: [
                "Lógica de juego interactiva y dinámica en tiempo real.",
                "Interfaz gráfica inmersiva con efectos visuales de simetría.",
                "Control de estados del juego (inicio, reinicio, niveles o puntuación).",
                "Animaciones fluidas al interactuar con los elementos del tablero.",
                "Sistema adaptable (Responsive Design) para cualquier dispositivo.",
                "Integración fluida con el panel principal de proyectos."
            ],
            links: {
                pdf: "https://ejemplo.com/doc-espejo.pdf",
                drive: "https://drive.google.com/espejo",
                github: "https://github.com/Seiseishon/Espejo-Magico"
            },
            equipo: [
                { nombre: "Sergio Saul Alex Soza", rol: "Líder" },
                { nombre: "Nelson Fabian Ramos", rol: "Ayudante" },
                { nombre: "Mauricio Maximiliano Villarreal", rol: "Ayudante" }
            ]
        }
    ];

    const obtenerProyectos = () => [...proyectos];

    const agregarProyecto = proyecto => proyectos.push(proyecto); 

    const eliminarProyecto = id => proyectos = proyectos.filter(p => p.id !== id);

    const buscarProyecto = txt => proyectos.filter(p => p.titulo.toLowerCase().includes(txt.toLowerCase()));

    return {
        obtenerProyectos,
        agregarProyecto,
        eliminarProyecto,
        buscarProyecto
    };

})();

export default proyectoService;