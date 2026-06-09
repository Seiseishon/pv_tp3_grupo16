import { useState } from "react";
import style from "../css/ListaProyectos.module.css";
import ListaProyectos from "../components/ListaProyectos";
import proyectoService from "../services/proyectoService";
import DetallesProyecto from "../components/DetallesProyecto";

const Dashboard = () => {

  const pendientes = proyectoService.obtenerProyectos().filter(p => p.estado === "Pendiente");
  const enProgresos = proyectoService.obtenerProyectos().filter(p => p.estado === "En Progreso");
  const finalizados = proyectoService.obtenerProyectos().filter(p => p.estado === "Finalizado");
  
  return (
    <main className={style.mainGlobal}>
      <section class="seccion-sobre">
        <div class="sobre-datos">
          <div class="sobre-dato">
            <span class="sobre-icono">🎓</span>
            <span class="sobre-texto">Cátedra de APU — 2026</span>
          </div>
          <div class="sobre-dato">
            <span class="sobre-icono">👥</span>
            <span class="sobre-texto">Grupo 16 — 5 integrantes</span>
          </div>
          <div class="sobre-dato">
            <span class="sobre-icono">🏫</span>
            <span class="sobre-texto">Universidad Nacional de Jujuy</span>
          </div>
        </div>
      </section>

      <section class="seccion-estadisticas">
        <h2 class="seccion-titulo">Estadísticas</h2>
        <div class="tarjetas-grid">
          <article class="tarjeta-stat">
            <span class="stat-icono">📋</span>
            <span class="stat-numero">5</span>
            <span class="stat-etiqueta">Tareas Pendientes</span>
          </article>
          <article class="tarjeta-stat">
            <span class="stat-icono">🔔</span>
            <span class="stat-numero">3</span>
            <span class="stat-etiqueta">Novedades Nuevas</span>
          </article>
          <article class="tarjeta-stat">
            <span class="stat-icono">✅</span>
            <span class="stat-numero">{finalizados.length}</span>
            <span class="stat-etiqueta">Proyectos Terminados: {finalizados.map(p => <h3 key={p.id}>{p.titulo}</h3>)}</span>
          </article>
        </div>
      </section>

      <section class="seccion-novedades">
        <h2 class="seccion-titulo">Novedades</h2>
        <ul class="lista-novedades">
          <li class="novedad-item">Se finalizaron los proyectos pendientes</li>
          <li class="novedad-item">Noel finalizó el apartado "Mi perfil"</li>
          <li class="novedad-item">Se realizaron cambios en el archivo "detalles" con el fin de tener un mejor entorno</li>
        </ul>
      </section>
    </main>
  )
}

export default Dashboard;