import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import React, { useState } from "react";
import regiones from "../datos/regiones.json";
import dietas from "../datos/dietas.json";
import rutinas from "../datos/rutinas.json";
import { authRegistro } from "../function/auth";

function validarRut(rut: string) {
  // Eliminar puntos y guiones
  rut = rut.replace(/[.-]/g, "");
  // Separar el cuerpo y el dígito verificador
  const cuerpo = rut.slice(0, -1);
  const dv = rut.slice(-1).toUpperCase();
  // Validar que el cuerpo tenga al menos 7 dígitos
  if (cuerpo.length < 7) return false;
  // Calcular el dígito verificador usando el módulo 11
  let suma = 0;
  let multiplo = 2;
  for (let i = cuerpo.length - 1; i >= 0; i--) {
    suma += +cuerpo[i] * multiplo;
    multiplo = multiplo === 7 ? 2 : multiplo + 1;
  }
  const resto = suma % 11;
  const dvEsperado = resto === 0 ? "0" : resto === 1 ? "K" : `${11 - resto}`;
  // Comparar el dígito verificador calculado con el ingresado
  return dv === dvEsperado;
}

function validarEdad(fecha: string) {
  const fechaNacimiento = new Date(fecha);
  const fechaActual = new Date();
  const fechaMinima = new Date(fechaActual);
  fechaMinima.setFullYear(fechaMinima.getFullYear() - 6);
  const fechaMaxima = new Date(fechaActual);
  fechaMaxima.setFullYear(fechaMaxima.getFullYear() - 70);
  return fechaNacimiento >= fechaMaxima && fechaNacimiento <= fechaMinima;
}

type Inputs = {
  firstName: string;
  lastName: string;
  rut: string;
  dateOfBirth: Date;
  email: string;
  password: string;
  id_diet: number;
  id_routine: number;
  id_city: number;
}

const Formulario = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const [region, setRegion] = useState(null);
  const [comuna, setComuna] = useState(null);
  const [diet, setDiet] = useState(null);
  const [rotuine, setRoutine] = useState(null);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    return await authRegistro(data);
  }

  /**
   function handleChangeRegion(e) {
    const value = e.target.value;
    const regionEncontrada = regiones.find((r) => r.id === value);
    setRegion(regionEncontrada);
    setComuna(null);
  }

  function handleChangeComuna(e) {
    const value = e.target.value;
    setComuna(value);
  }

  function handleChangeDiet(e) {
    const value = e.target.value;
    const dietaEncontrada = dietas.find((d) => d.id === value);
    setDiet(dietaEncontrada);
  }

  function handleChangeRotuine(e) {
    const value = e.target.value;
    const rutinaEncontrada = rutinas.find((rout) => rout.id === value);
    setRoutine(rutinaEncontrada);
  }
   */
  const [regions, setRegion] = useState([]);
  const [cities, setCities] = useState([]);
  const [diets, setDiets] = useState([]);
  const [routines, setRoutines] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3000/cities')
      .then(response => response.json())
      .then(data => setCities(data));
  }, []);

  const handleChangeRegion = async (event) => {
    const regionId = event.target.value;
    const response = await fetch(`http://localhost:3000/cities/${regionId}`);
    const data = await response.json();
    setCities(data);
  };

  useEffect(() => {
    fetch('http://localhost:3000/diets')
      .then(response => response.json())
      .then(data => setDiets(data));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/routines')
      .then(response => response.json())
      .then(data => setRoutines(data));
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)} 
      className="max-w-4xl mx-auto p-4 bg-gray-300 shadow-md rounded-md"
      method="POST"
    >
      <div className="flex flex-wrap -mx-3 mb-6 ">
        {/* Nombre Obligatorio */}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 py-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="firstName"
          >
            Nombre
          </label>
          <input
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
              errors.firstName && "bg-red-200 border-red-700"
            }`}
            type="text"
            placeholder="Juan"
            {...register("firstName", {
              required: {
                value: true,
                message: "Nombre es obligatorio",
              },
              minLength: {
                value: 2,
                message: "Nombre demasiado corto",
              },
              maxLength: {
                value: 30,
                message: "Nombre demasiado grande",
              },
              pattern: {
                value: /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]*$/,
                message: "Nombre inválido, compruebe el formato",
              },
            })}
          />
          {errors.firstName && (
            <span className="text-red-600">{errors.firstName.message}</span>
          )}
        </div>

        {/* Apellido Opcional */}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 py-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="lastName"
          >
            Apellido (Opcional)
          </label>
          <input
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
              errors.lastName && "bg-red-200 border-red-700"
            }`}
            type="text"
            placeholder="Pérez"
            {...register("lastName", {
              minLength: {
                value: 2,
                message: "Apellido demasiado corto",
              },
              maxLength: {
                value: 30,
                message: "Apellido demasiado grande",
              },
              pattern: {
                value: /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]*$/,
                message: "Apellido inválido, compruebe el formato",
              },
            })}
          />
          {errors.lastName && (
            <span className="text-red-600">{errors.lastName.message}</span>
          )}
        </div>

        {/* RUT Obligatorio */}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 py-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="rut"
          >
            Rut
          </label>
          <input
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
              errors.rut && "bg-red-200 border-red-700"
            }`}
            type="text"
            placeholder="12345678-9"
            {...register("rut", {
              required: {
                value: true,
                message: "RUT es obligatorio",
              },
              minLength: {
                value: 8,
                message: "RUT inválido",
              },
              maxLength: {
                value: 12,
                message: "RUT no válido",
              },
              validate: (value) => validarRut(value) || "RUT no válido",
            })}
          />
          {errors.rut && (
            <span className="text-red-600">{errors.rut.message}</span>
          )}
        </div>

        {/* Fecha Nacimiento Obligatorio */}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 py-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="dateOfBirth"
          >
            Fecha de nacimiento
          </label>
          <input
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
              errors.dateOfBirth && "bg-red-200 border-red-700"
            }`}
            type="date"
            placeholder="06-02-2002"
            {...register("dateOfBirth", {
              required: {
                value: true,
                message: "Fecha de nacimiento obligatorio",
              },
              validate: (value) =>
                validarEdad(value) ||
                "La edad debe ser mayor a 6 años y menor de 70 años",
            })}
          />
          {errors.dateOfBirth && (
            <span className="text-red-600">{errors.dateOfBirth.message}</span>
          )}
        </div>

        {/* Correo electronico Obligatorio */}
        <div className="w-full px-3 mb-6 md:mb-0 py-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="email"
          >
            Correo electrónico
          </label>
          <input
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
              errors.email && "bg-red-200 border-red-700"
            }`}
            type="email"
            placeholder="juan@ejemplo.com"
            {...register("email", {
              required: {
                value: true,
                message: "Correo es obligatorio",
              },
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Correo no válido",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-600">{errors.email.message}</span>
          )}
        </div>

        {/* Región Ayuda a elegir la comuna */}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 py-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="region"
          >
            Región
          </label>
          <select
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
              errors.region && "bg-red-200 border-red-700"
            }`}
            id="region"
            {...register("region", {
              required: true,
            })}
            onChange={handleChangeRegion}
          >
            <option value="">Seleccione una región</option>
            {regions.map((region) => (
              <option key={region.id} value={region.id}>
                {region.nombre}
              </option>
            ))}
          </select>
          {errors.region && (
            <span className="text-red-600">Debe seleccionar una región</span>
          )}
        </div>

        {/* Comuna */}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 py-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="city"
          >
            Comuna
          </label>
          <select
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
              errors.comuna && "bg-red-200 border-red-700"
            }`}
            id="city"
            {...register("city", { required: true })}
            onChange={handleChangeComuna}
          >
            <option value="">Seleccione una comuna</option>
            {cities.map(city => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
          ))}
          </select>
          {errors.comuna && (
            <span className="text-red-600">Debe seleccionar una comuna</span>
          )}
        </div>

        {/* Dieta */}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 py-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="diet"
          >
            Dieta
          </label>
          <select
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
              errors.diet && "bg-red-200 border-red-700"
            }`}
            id="diet"
            {...register("diet", {
              required: true,
            })}
            onChange={handleChangeDiet}
          >
            <option value="">Seleccione una dieta</option>
            {diets.map((diet) => (
              <option key={diet.id} value={diet.id} title={`${diet.descripcion}`}>
                {diet.nombre}
              </option>
            ))}
          </select>
          {errors.diet && (
            <span className="text-red-600">Debe seleccionar una dieta</span>
          )}
        </div>

        {/* Rutinas */}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 py-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="rotuine"
          >
            Rutina
          </label>
          <select
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
              errors.routine && "bg-red-200 border-red-700"
            }`}
            id="routine"
            {...register("routine", {
              required: true,
            })}
            onChange={handleChangeRotuine}
          >
            <option value="" title="tiene que elegir una opción">
              Seleccione una región
            </option>
            {routines.map((routine) => (
              <option key={routine.id} value={routine.id} title={`${routine.descripcion}`}>
                {routine.nombre}
              </option>
            ))}
          </select>
          {errors.routine && (
            <span className="text-red-600">Debe seleccionar una rutina</span>
          )}
        </div>

        {/* Contraseña */}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 py-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
              errors.password && "bg-red-200 border-red-700"
            }`}
            type="password"
            id="password"
            placeholder="********"
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: {
                value: 6,
                message: "La contraseña debe tener al menos 6 caracteres",
              },
              maxLength: {
                value: 20,
                message: "La contraseña debe tener máximo 20 caracteres",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{6,20}$/,
                message:
                  "La contraseña debe contener minúsculas, mayúsculas, números y caracteres especiales",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-600">{errors.password.message}</span>
          )}
        </div>

        {/* Confirmar Contraseña */}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 py-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="repassword"
          >
            Confirmar Contraseña
          </label>
          <input
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
              errors.repassword && "bg-red-200 border-red-700"
            }`}
            type="password"
            placeholder="********"
            id="repassword"
            {...register("repassword", {
              required: "Debes confirmar la contraseña",
            })}
          />
          {watch("repassword") !== watch("password") &&
          getValues("repassword") ? (
            <span className="text-red-600">La contraseña no coinciden</span>
          ) : null}
          {errors.repassword && (
            <span className="text-red-600">{errors.repassword.message}</span>
          )}
        </div>

        {/* Términos y condiciones */}
        <div className="!important:flex w-full md:w-1/2 px-3 mb-6 md:mb-0 py-2">
          <input
            type="checkbox"
            name="acceptTyC"
            className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
            {...register("acceptTyC", {
              required: {
                value: true,
                message: "Acepta los términos y condiciones",
              },
            })}
          />
          <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-2 ">
            Acepto los términos y condiciones
          </label>
          {errors.acceptTyC && (
            <span className="block text-red-600 mt-1">
              {errors.acceptTyC.message}
            </span>
          )}
        </div>
      </div>
      {/* submit */}
      <div className="flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center"
          type="submit"
        >
          Enviar
        </button>
      </div>
      
    </form>
  );
}

export default Formulario;