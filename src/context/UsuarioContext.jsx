import { createContext, useState } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
    const [usuario, setUsuario] = useState({
        nombre: "Gerardo",
        dni: "45672154",
        rol: "Alumno",
        institucion: "Universidad Nacional de Jujuy"
    });

    const actualizarPerfil = (nuevosDatos) => {
        setUsuario((prev) => ({ ...prev, ...nuevosDatos }));
    };

    return (
        <UsuarioContext.Provider value={{ usuario, actualizarPerfil }}>
            {children}
        </UsuarioContext.Provider>
    );
};