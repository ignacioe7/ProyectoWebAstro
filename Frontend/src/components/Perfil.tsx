import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CerrarSesion from '../components/CerrarSesion';
import { getAuthLocalStorage } from "../function/localstorage";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";



import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale);

type User = {
    id_user: number;
    firstName: string;
    lastName: string;
    email: string;
    rut: string;
    diet_name: string;
    routine_name: string;
    city_name: string;
};

type Stats = {
    averageWeight: number,
    imc: number,
    month: string,
    year: number
}

type FormDataAltura = {
    height: number;
};

type FormDataPeso = {
    weight: number;
};

const Perfil: React.FC = () => {
    const {
        register: registerAltura,
        handleSubmit: handleSubmitAltura,
        formState: { errors: errorsAltura, isSubmitting: isSubmittingAltura },
    } = useForm<FormDataAltura>();
    const {
        register: registerPeso,
        handleSubmit: handleSubmitPeso,
        formState: { errors: errorsPeso, isSubmitting: isSubmittingPeso },
    } = useForm<FormDataPeso>();

    const [userData, setUserData] = React.useState<User>();
    const [stats, setStats] = useState<Stats[]>([]);
    const [loading, setLoading] = React.useState(true);
    const chartRef = React.useRef(null);

    const validateAltura = (value: number) => {

        const numValue = value;
        return (
            (numValue >= 0.5 && numValue <= 2.5) ||
            "Altura no válida, verifique que sea en metros\n ej:1.82"
        );
    };

    const validatePeso = (value: number) => {
        const numValue = value;
        return (
            (numValue >= 2.1 && numValue <= 635) ||
            "Peso no válida, verifique que sea en kilogramos\n ej: 72,34"
        );
    };

    useEffect(() => {
        const userVal = getAuthLocalStorage();
        const token = userVal?.token;

        if (token) {
            axios.get(`http://localhost:3000/users/${userVal.user.id_user}`)
                .then(response => {
                    setUserData(response.data[0]);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching data: ', error);
                    setLoading(false);
                });
            axios.get(`http://localhost:3000/users/${userVal.user.id_user}/yearlyStats`)
                .then(response => {
                    setStats(response.data);
                    setLoading(false);
                    console.log(response.data);
                    if (response.data.length > 0 && chartRef.current) {
                        const ctx = chartRef.current.getContext('2d');

                        const labels = response.data.map(stat => `${stat.month} ${stat.year}`);
                        const dataPeso = response.data.map(stat => stat.averageWeight);
                        const dataIMC = response.data.map(stat => stat.imc);
                        console.log(dataPeso);

                        new Chart(ctx, {
                            options: {
                                responsive: true,
                                plugins: {
                                    title: {
                                        display: true,
                                        text: 'Progreso de IMC',
                                        font: {
                                            size: 20
                                        },
                                        position: 'top',
                                        color: 'rgb(255, 99, 132)',
                                    },
                                    legend: {
                                        display: true,
                                        position: 'top',
                                    },
                                }
                            },
                            type: 'line',
                            data: {
                                labels: labels,
                                datasets: [{
                                    label: 'PESO',
                                    data: dataPeso,
                                    borderColor: 'rgb(255, 99, 132)',
                                    backgroundColor: 'rgba(255, 99, 132, 0.5)'
                                }, {
                                    label: 'IMC',
                                    data: dataIMC,
                                    borderColor: 'rgb(75, 192, 192)',
                                    backgroundColor: 'rgba(75, 192, 192, 0.5)'
                                }]
                            },

                        });

                    }

                })
                .catch(error => {
                    console.error('Error fetching data: ', error);
                    setLoading(false);
                });
        } else {
            alert("No se ha iniciado sesion");
            window.location.href = "/inicioSesion";
        }

    }, []);

    const onSubmitAltura: SubmitHandler<{ height: number }> = (data) => {
        const user = getAuthLocalStorage();
        axios.post('http://localhost:3000/height/', {
            id_user: user.user.id_user,
            height: data.height,
        })
            .then(response => {
                alert('Altura guardada correctamente');
                console.log(response.data);
            })
            .catch(error => {
                alert('Error al guardar la altura');
                console.error('Error saving data: ', error);
            });
    };

    const onSubmitPeso: SubmitHandler<{ weight: number }> = (data) => {
        const user = getAuthLocalStorage();
        axios.post('http://localhost:3000/weight/', {
            id_user: user.user.id_user,
            weight: data.weight,
        })
            .then(response => {
                alert('Peso guardado correctamente');
                console.log(response.data);
            })
            .catch(error => {
                alert('Error al guardar el peso');
                console.error('Error saving data: ', error);
            });
    };

    return (
        <>
            <div className='grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-8'>
                <div className="max-w-xl mx-auto p-4">
                    <h2 className="text-2xl font-bold text-white mb-2">
                        ¡Hola {userData?.firstName} {userData?.lastName}!
                    </h2>

                    <p className="text-lg text-gray-500 dark:text-gray-400 italic">
            su correo es:             {userData?.email}
                    </p>
                </div>
                <div className='max-w-xl mx-auto p-4 '>
                    <CerrarSesion />
                </div>
            </div>



            <section className="px-4 py-12 mx-auto max-w-7xl mt-16 items-center justify-center ">
                <canvas ref={chartRef} width="900" height="300" className="flex m-auto  mt-auto"></canvas>
            </section>

            <div className='grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-8 pb-10'>
                <form
                    onSubmit={handleSubmitAltura(onSubmitAltura)}
                    className="max-w-2xl mx-auto p-4 bg-gray-300 shadow-md rounded-md"
                >
                    <div className="w-full md:w-2/2 px-3 mb-6 md:mb-0 py-2">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="height"
                        >
                            Altura [metros]
                        </label>
                        <input
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${errorsAltura.height && "bg-red-200 border-red-700"
                                }`}
                            id="height"
                            type="number"
                            step="0.01"
                            placeholder="1,80"
                            {...registerAltura("height", {
                                required: "Altura es obligatoria",
                                validate: validateAltura,
                            })}
                        />
                        {errorsAltura.height && (
                            <span className="text-red-600">{errorsAltura.height.message}</span>
                        )}
                    </div>

                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center">
                        Enviar
                    </button>
                </form>

                <form
                    onSubmit={handleSubmitPeso(onSubmitPeso)}
                    className="max-w-2xl mx-auto p-4 bg-gray-300 shadow-md rounded-md"
                >
                    <div className="w-full md:w-2/2 px-3 mb-6 md:mb-0 py-2">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="weight"
                        >
                            Peso [kg]
                        </label>
                        <input
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${errorsPeso.weight && "bg-red-200 border-red-700"
                                }`}
                            id="weight"
                            type="number"
                            step="0.01"
                            placeholder="70,8"
                            {...registerPeso("weight", {
                                required: "Peso es obligatorio",
                                validate: validatePeso,
                            })}
                        />
                        {errorsPeso.weight && (
                            <span className="text-red-600">{errorsPeso.weight.message}</span>
                        )}
                    </div>

                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center ">
                        Enviar
                    </button>
                </form>

            </div>


        </>
    );
};

export default Perfil;

