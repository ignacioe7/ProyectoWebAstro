import React from 'react';
import { removeAuthLocalStorage } from "../function/localstorage";

const CerrarSesion = () => {
  const cerrarSesion = () => {
    removeAuthLocalStorage();
    window.location.href = "/inicioSesion";
  };

  return (
    <button onClick={cerrarSesion} className='bg-red-500 text-white px-2 py-1 rounded'>
      Cerrar sesión
    </button>
  );
};

export default CerrarSesion;