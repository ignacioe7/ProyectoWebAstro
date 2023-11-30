import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { authLogin } from "../function/auth";
import ReCAPTCHA from "react-google-recaptcha";
import { getAuthLocalStorage } from "../function/localstorage";

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

  const [loginAttempts, setLoginAttempts] = useState(0);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captchaError, setCaptchaError] = useState(null);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };
  const [authError, setAuthError] = useState({
    error: false,
    message: "",
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const loggedIn = await authLogin(data.email, data.password, captchaValue, loginAttempts);
  
      if ((loggedIn && loginAttempts < 3 && captchaValue === null) || ( (loggedIn && captchaValue !== null && loginAttempts >= 3))) {
        alert('Bienvenido '+ getAuthLocalStorage()?.user.firstName + 'Usted es un usuario '+ getAuthLocalStorage()?.user.role);
        window.location.href = "/";
      }
    } catch (error: unknown) {
      setLoginAttempts(loginAttempts + 1);
  
      if (loginAttempts >= 2) {
        setShowCaptcha(true);
      }
      if (error instanceof Error) {
        setAuthError({
          error: true,
          message: error.message,
        });
    
        alert(error.message);
      }
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
      {showCaptcha && (
        <ReCAPTCHA
          sitekey="6LeI3SEpAAAAAAIfKHFrkZKeB1Wk6PbSRkvLAlHT"
          onChange={handleCaptchaChange} 
        />
      )}
      <button 
        type="submit"
        className="g-recaptcha bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center">
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