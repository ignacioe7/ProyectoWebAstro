import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import React from "react";




export function CardDefault() {
    return (
        <div className="grid justify-items-center grid-cols-1 gap-10 mx-auto lg:grid-cols-2 ">
            <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-56">
                    <img
                        src="src\assets\espalda-biceps.png"
                        alt="card-image"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        <strong>Rutina Espalda-Biceps</strong>
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi mollitia libero quos deleniti. Ducimus dolorem architecto totam quas autem expedita, assumenda cupiditate omnis facilis modi velit harum natus alias debitis.
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <a href="#">
                        <button className="h-10 px-6 font-semibold rounded-md bg-black text-white">Leer más</button>
                    </a>
                </CardFooter>
            </Card>
            <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-56">
                    <img
                        src="src\assets\FULL-bODY.png"
                        alt="card-image"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                    <strong>Rutina FULL-BODY</strong>
                    </Typography>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic quis beatae inventore sint deserunt ut vel distinctio in commodi. Vel laudantium quae illum nemo unde numquam facere delectus iusto minima.
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <a href="#">
                        <button className="h-10 px-6 font-semibold rounded-md bg-black text-white">Leer más</button>
                    </a>
                </CardFooter>
            </Card>
            <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-56">
                    <img
                        src="src\assets\pecho-hombro.png"
                        alt="card-image"
                    />
                    
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                    <strong>Rutina Pecho-Hombro</strong>
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odio necessitatibus ratione maxime ullam asperiores labore ut? Dignissimos maiores quasi soluta odit accusamus perferendis architecto neque! Maxime laboriosam ipsa neque?
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <a href="#">
                        <button className="h-10 px-6 font-semibold rounded-md bg-black text-white">Leer más</button>
                    </a>
                </CardFooter>
            </Card>
            <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-56">
                    <img
                        src="src\assets\piernas.png"
                        alt="card-image"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                    <strong>Rutina Piernas</strong>
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptatibus. Voluptatum repellat aperiam eaque doloribus sit recusandae molestias qui deleniti repudiandae illo quia quae totam, velit pariatur labore reiciendis accusantium?
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <a href="#">
                        <button className="h-10 px-6 font-semibold rounded-md bg-black text-white">Leer más</button>
                    </a>
                </CardFooter>
            </Card>
        </div>
    );
}