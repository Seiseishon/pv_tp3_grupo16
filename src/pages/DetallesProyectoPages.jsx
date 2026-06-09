import { useNavigate, useParams } from "react-router-dom";
import style from "../css/ListaProyectos.module.css";
import DetallesProyecto from "../components/DetallesProyecto";
import proyectoService from "../services/proyectoService";

const DetallesProyectoPages = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const proyecto = proyectoService.obtenerProyectos().find(p => p.id === Number(id));

  return (
    <main className={style.mainGlobal}>
      <DetallesProyecto proyecto={proyecto}
      alVolver={() => navigate('/proyectos')}/>
    </main>
  )
}

export default DetallesProyectoPages;