import { useForm } from "react-hook-form";

function Formulario() {

  const { register, handleSubmit } = useForm();

  return (

    <form
      onSubmit={handleSubmit((data) => {
        console.log(data)
      })}
      className="max-w-lg mx-auto p-4 bg-gray-300 shadow-md rounded-md"
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
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="firstName"
            type="text"
            placeholder="Juan"
            autoComplete="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        {/* Apellido Opcional */}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 py-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="lastName"
          >
            Apellido
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="lastName"
            type="text"
            placeholder="Pérez"
            autoComplete="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
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
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="rut"
            type="text"
            placeholder="12345678-9"
            autoComplete="rut"
            value={rut}
            onChange={(e) => setRut(e.target.value)}
            required
          />
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
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="dateOfBirth"
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
          />
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
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="email"
            placeholder="juan@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
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
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="regions">
          </select>
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
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="city">
          </select>
        </div>
        {/* Dieta Obligatorio*/}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 py-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="diet"
          >
            Dieta
          </label>
          <select
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="diet">
          </select>
        </div>
        {/* Rutina Obligatorio*/}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 py-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="routine"
          >
            Rutina
          </label>
          <select
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="routine">
          </select>
        </div>
        {/* Contraseña Obligatorio */}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 py-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* Confirmar Contraseña Obligatorio*/}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 py-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="repassword"
          >
            Confirmar contraseña
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="repassword"
            type="repassword"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
            required
          />
        </div>
        {/* tyc Obligatorio*/}
        <div className="lg:col-span-4 mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] item-center m-4 p-2">
          <input className="bg-gray-50 border-gray-700 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" type="checkbox"
            name="tyc" id="tyc" required />
          <label className="label inline-block pl-[0.15rem] hover:cursor-pointer text-gray-700" >
            Aceptar términos y condiciones
          </label>
        </div>
      </div>
      {/* submit */}
      <div className="flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Enviar
        </button>
      </div>
    </form>
  )
    </>
}