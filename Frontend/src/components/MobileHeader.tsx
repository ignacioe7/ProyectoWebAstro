import { Dialog } from "@headlessui/react";
import { useRef, useState } from "react";

export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.75"
          stroke="currentColor"
          className="w-8 h-8 hover:text-orange-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          ></path>
        </svg>
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        initialFocus={buttonRef}
      >
        <Dialog.Panel className="fixed top-0 right-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-gray-800 bg-gradient-to-b from-black/80 to-red-950/80 text-red-100 border-b border-red-50/30 overflow-y-auto">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="fixed top-[18px] right-[32px] focus:ring-2 focus:ring-white focus:ring-opacity-25 focus:outline-none rounded-lg"
            ref={buttonRef}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.75}
              stroke="currentColor"
              className="w-8 h-8 text-gray-200 hover:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <Dialog.Title className="text-3xl text-white">Menu</Dialog.Title>

          <div className="flex flex-col items-center space-y-2.5 mt-5">
            <a className="text-xl text-gray-400 hover:text-gray-100 hover:underline-offset-4 hover:underline hover:bg-gray-600 rounded py-2 px-1 transform active:scale-90"
              href="/dietas">Alimentación</a>
            <a className="text-xl text-gray-400 hover:text-gray-100 hover:underline-offset-4 hover:underline hover:bg-gray-600 rounded py-2 px-1 transform active:scale-90"
              href="/rutinas">Ejercitación</a>
            <a className="text-xl text-gray-400 hover:text-gray-100 hover:underline-offset-4 hover:underline hover:bg-gray-600 rounded py-2 px-1 transform active:scale-90"
            href="/acercaDe">Acerca de Nosotros</a>
            <a className="text-xl text-gray-400 hover:text-gray-100 hover:underline-offset-4 hover:underline hover:bg-gray-600 rounded py-2 px-1 transform active:scale-90"
              href="/contacto">Contacto</a>
            <a className="text-xl text-gray-400 hover:text-gray-100 hover:underline-offset-4 hover:underline hover:bg-gray-600 rounded py-2 px-1 transform active:scale-90"
              href="/blog">Blog</a>
            <a className="text-xl text-gray-400 hover:text-gray-100 hover:underline-offset-4 hover:underline hover:bg-gray-600 rounded py-2 px-1 transform active:scale-90"
              href="perfilUsuario">perfil</a>
              
          </div>
          <div className="relative bottom-0">
              <div className="pt-6">
                <a className="block px-4 py-3 mb-3 leading-loose text-xl text-center font-semibold transition-colors duration-900 ease-in-out transform active:scale-95 bg-transparent hover:bg-gradient-to-r from-yellow-300 to-red-600 text-gray-50 hover:text-gray-800 rounded-xl "
                  href="/inicioSesion">Iniciar Sesión</a>
                <a className="block px-4 py-3 mb-2 leading-loose text-xl text-center text-white font-semibold bg-gradient-to-r from-red-600 to-purple-600 hover:from-blue-600 hover:to-green-500 rounded-xl transition-colors duration-500 transform active:scale-95"
                  href="/registro">Crear cuenta</a>
              </div>
              <p className="my-4 text-xs text-center text-gray-400">
                <span>Copyright © 2023</span>
              </p>
            </div>  
        </Dialog.Panel>
      </Dialog>
    </>
  );
};