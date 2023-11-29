import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import React from "react";
import axios from 'axios';
import { authLogin } from "../function/auth";

type Inputs = {
  email: string;
  password: string;
};

const Inicio = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [authError, setAuthError] = useState({
    error: false,
    message: "",
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const logedIn = await authLogin(data.email, data.password);
    
    if (logedIn) {
      window.location.href = "/";
    } else {
      setAuthError({
        error: true,
        message: "Usuario o contraseña incorrectos",
      });
    }
  };

  return (
    <>
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-4xl mx-auto p-4 bg-gray-300 shadow-md rounded-md"
      method="POST"
    >
      <div className="flex flex-wrap -mx-3 mb-6 ">
        <div className="w-full px-3 mb-6 md:mb-0 py-2">
          <label
            htmlFor="correo"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Correo
          </label>
          <input
            id="email"
            type="email"
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${errors.email && "bg-red-200 border-red-700"
              }`}
            {...register("email", { required: true })}
          />
          {errors.email && <span className="text-red-600">Este campo es obligatorio</span>}
        </div>
        <div className="w-full px-3 mb-6 md:mb-0 py-2">
          <label
            htmlFor="password"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${errors.password && "bg-red-200 border-red-700"
              }`}
            {...register("password", { required: true })}
          />
          {errors.password && <span className="text-red-600">Este campo es obligatorio</span>}
        </div>
      </div>


      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center">
        Enviar
      </button>
    </form>
    </>
  );
}

export default Inicio;

// res.status -> codigo HTTP de la respuesta -> 200 OK
    // res.data -> Datos que devuelve la API
    // if (res.status === 200) -> Quiere decir que hubo exito

    // DESDE EL BACKEND
    //res.status(200).json({
    //  token, rol, correo, rut
    //})

    //res.status(401).json({
    //  error: 'no se pudo'
    //})

    // DESDE EL FRONTEND

    //if (res.status === 200) {
    // inicio de sesion exitoso
    //  alert('Inicio de sesion exitoso')
    //} else if (res.status === 401) {
    //  alert('Hubo un error al autenticar')
    //}