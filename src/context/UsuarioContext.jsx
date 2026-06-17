import { createContext, useState, useEffect } from 'react';

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({
    nombre: "Mauricio Villarreal",
    dni: "12345678",
    rol: "Alumno",
    institucion: "Facultad de Ingeniería - UNJU"
  });

  const actualizarPerfil = (nuevosDatos) => {
    setUsuario({ ...usuario, ...nuevosDatos });
  };

  return (
    <UsuarioContext.Provider value={{ usuario, actualizarPerfil }}>
      {children}
    </UsuarioContext.Provider>
  );
};