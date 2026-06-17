import { createContext, useState, useEffect } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
    
    const usuarioGuardado = localStorage.getItem("usuario_sesion");
    
    const estadoInicial = usuarioGuardado 
        ? JSON.parse(usuarioGuardado) 
        : {
            nombre: "Gerardo",
            dni: "45672154",
            rol: "Alumno",
            institucion: "Universidad Nacional de Jujuy"
          };

    const [usuario, setUsuario] = useState(estadoInicial);

    const actualizarPerfil = (nuevosDatos) => {
        setUsuario((prev) => ({ ...prev, ...nuevosDatos }));
    };

    useEffect(() => {
        localStorage.setItem("usuario_sesion", JSON.stringify(usuario));
    }, [usuario]); 

    return (
        <UsuarioContext.Provider value={{ usuario, actualizarPerfil }}>
            {children}
        </UsuarioContext.Provider>
    );
};