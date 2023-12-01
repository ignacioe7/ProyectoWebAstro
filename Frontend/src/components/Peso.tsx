import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import React from "react";

type FormData = {
  peso: string;
};

const Registro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  

  const [usuarios] = React.useState<FormData[]>([]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const usuarioEncontrado = usuarios.find(
      (usuario) =>
        usuario.peso === data.peso    );
  };

  return (
    <form
    onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto p-4 bg-gray-300 shadow-md rounded-md">
        <div className="w-full md:w-2/2 px-3 mb-6 md:mb-0 py-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="weight">
            Peso [kg]
          </label>
          <input
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
              errors.peso && "bg-red-200 border-red-700"
            }`}
            id="weight"
            type="number"
            step="0.01"
            placeholder="70,35"
            {...register("peso", {
              required: "Peso es  obligatorio",
              validate: validatePeso,
            })}
          />
          {errors.peso && (
            <span className="text-red-600">{errors.peso.message}</span>
          )}
        </div>
      <button type="submit" disabled={isSubmitting} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center">
        Enviar
      </button>
    </form>
  );
};

export default Registro;
