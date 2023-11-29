import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import React from "react";
import axios from 'axios';

type FormData = {
  nombre: any;
  correo: string;
  contrasenya: string;
};

const Inicio = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  // NO VA
  const [usuarios, setUsuarios] = React.useState<FormData[]>([]);

  // NO VA
  React.useEffect(() => {
    fetch("./src/datos/usuarios.json")
      .then((res) => res.json())
      .then((data) => setUsuarios(data))
      .catch((err) => console.error(err));
  }, []);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const { correo, contrasenya } = data;
    // llamar a la API
    const res = await axios.post('http://localhost:3000/users/login',
    { correo, contrasenya });

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


    // NO VA
    const usuarioEncontrado = usuarios.find(
      (usuario) =>
        usuario.correo === data.correo &&
        usuario.contrasenya === data.contrasenya
    );

    if (usuarioEncontrado) {
      alert(`Bienvenido ${usuarioEncontrado.nombre}`);
      window.location.href="/perfilUsuario";
    } else {
      alert("Correo o contraseña incorrectos");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-4xl mx-auto p-4 bg-gray-300 shadow-md rounded-md"
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
            id="correo"
            type="email"
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
              errors.correo && "bg-red-200 border-red-700"
            }`}
            {...register("correo", { required: true })}
          />
          {errors.correo && <span className="text-red-600">Este campo es obligatorio</span>}
        </div>
        <div className="w-full px-3 mb-6 md:mb-0 py-2">
          <label
            htmlFor="contrasenya"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Contraseña
          </label>
          <input
            id="contrasenya"
            type="password"
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
              errors.contrasenya && "bg-red-200 border-red-700"
            }`}
            {...register("contrasenya", { required: true })}
          />
          {errors.contrasenya && <span className="text-red-600">Este campo es obligatorio</span>}
        </div>
      </div>
      

      <button type="submit" disabled={isSubmitting} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center">
        Enviar
      </button>
    </form>
  );
};

export default Inicio;
