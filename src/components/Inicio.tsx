import React, { useState } from 'react';




function Inicio() {
  const [errorMessages, setErrorMessages] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const renderErrorMessage = (name: string) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const errors: { [key: string]: string } = {
    email: "invalido correo electrónico",
    password: "debe ser obligatorio"
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements as unknown as {
      email: { value: string };
      password: { value: string };
    };

    if (password.value === "")
      setErrorMessages({ name: "password", message: errors.password });
    //else 
    //setIsSubmitted(true);

  }

  return (
    
    <form className="needs-validation max-w-4xl mx-auto p-4 bg-gray-300 shadow-md rounded-md" onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
          <div className="mb-2">
          <label className="" htmlFor="email">
            <strong>Correo Electrónico</strong></label>
          </div>
          <input type="email" className="form-input block w-full rounded-md border-0 py-1.5 text-white bg-gray-800 first-letter:hadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="email" required />
          {renderErrorMessage("email")}
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="mb-2">
          <label htmlFor="password">
            <strong>Contraseña</strong></label>
          </div>
          <input type="password" className="form-input block w-full rounded-md border-0 py-1.5 text-white bg-gray-800 first-letter:hadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="password" />
          {renderErrorMessage("password")}
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <input className="lex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform active:scale-95" type="submit" value="Enviar" />
        </div>
      </div>

    </form>

  );
}

export default Inicio;