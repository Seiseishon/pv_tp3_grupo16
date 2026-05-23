import style from '../css/Boton.module.css';

const Boton = ({ alVolver }) => {
    return (
        <button onClick={alVolver} className={style.btnVolver}>
            <svg
                className={style.flecha}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M5 12l14 0" />
                <path d="M5 12l6 6" />
                <path d="M5 12l6 -6" />
            </svg>

        </button>
    )
}

export default Boton;