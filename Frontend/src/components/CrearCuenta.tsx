import { useForm } from "react-hook-form";
import React, { useState } from "react";
import regiones from "../datos/regiones.json";
import dietas from "../datos/dietas.json";
import rutinas from "../datos/rutinas.json";

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

function Formulario() {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      rut: "",
      dateOfBirth: "",
      email: "",
      region: "",
      comuna: "",
      diet: "",
      routine: "",
      height: "",
      weight: "",
      password: "",
      repassword: "",
      acceptTyC: false,
    },
  });
  const [region, setRegion] = useState(null);
  const [comuna, setComuna] = useState(null);
  const [diet, setDiet] = useState(null);
  const [rotuine, setRoutine] = useState(null);

  const validateAltura = (value: string) => {
    // Convertir el valor con coma decimal a punto decimal
    const numValue = parseFloat(value.replace(",", "."));
    return (
      (numValue >= 0.5 && numValue <= 2.5) ||
      "Altura no válida, verifique que sea en metros\n ej:1.82"
    );
  };

  const validatePeso = (value: string) => {
    // Convertir el valor con coma decimal a punto decimal
    const numValue = parseFloat(value.replace(",", "."));
    return (
      (numValue >= 2.1 && numValue <= 635) ||
      "Peso no válida, verifique que sea en kilogramos\n ej: 72,34"
    );
  };

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

  return (
    <form
      onSubmit={handleSubmit((data) => {alert(`Este es el JSON que se enviará al backend: ${JSON.stringify(data, null, 2)}`); window.location.href="/perfilUsuario"})}
      className="max-w-4xl mx-auto p-4 bg-gray-300 shadow-md rounded-md"
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
            htmlFor="regions"
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
            {regiones.map((r) => (
              <option key={r.id} value={r.id}>
                {r.nombre}
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
            htmlFor="comuna"
          >
            Comuna
          </label>
          <select
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
              errors.comuna && "bg-red-200 border-red-700"
            }`}
            id="comuna"
            {...register("comuna", { required: true })}
            onChange={handleChangeComuna}
          >
            <option value="">Seleccione una comuna</option>
            {region &&
              region.comunas.map((c) => (
                <option key={c} value={c}>
                  {c}
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
            {dietas.map((d) => (
              <option key={d.id} value={d.id} title={`${d.descripcion}`}>
                {d.nombre}
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
            {rutinas.map((rou) => (
              <option key={rou.id} value={rou.id} title={`${rou.descripcion}`}>
                {rou.nombre}
              </option>
            ))}
          </select>
          {errors.routine && (
            <span className="text-red-600">Debe seleccionar una rutina</span>
          )}
        </div>

        {/* Altura */}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 py-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="height"
          >
            Altura [metros]
          </label>
          <input
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
              errors.height && "bg-red-200 border-red-700"
            }`}
            id="height"
            type="number"
            step="0.01"
            placeholder="1,80"
            {...register("height", {
              required: "Altura es  obligatoria",
              validate: validateAltura,
            })}
          />
          {errors.height && (
            <span className="text-red-600">{errors.height.message}</span>
          )}
        </div>

        {/* Peso */}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 py-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="weight"
          >
            Peso [kg]
          </label>
          <input
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
              errors.weight && "bg-red-200 border-red-700"
            }`}
            id="weight"
            type="number"
            step="0.01"
            placeholder="70,35"
            {...register("weight", {
              required: "Peso es  obligatorio",
              validate: validatePeso,
            })}
          />
          {errors.weight && (
            <span className="text-red-600">{errors.weight.message}</span>
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