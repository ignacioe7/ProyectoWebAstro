import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import React, { useState, useEffect} from "react";

type Diet = {
    id_image: number;
    name: string;
    description: string;
    image: string;
};

export function CardDefault() {
    const [diets, setDiets] = useState<Diet[]>([]);

    return (
        <div className="grid justify-items-center grid-cols-1 gap-10 mx-auto lg:grid-cols-2">
            <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-56">
                    <img
                        src="src\assets\Alcalina.png"
                        alt="card-image"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        <strong>Dieta Alcalina</strong>
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate ducimus explicabo similique mollitia sint eum asperiores quasi velit sit delectus natus, neque labore expedita molestiae dolore temporibus quia aspernatur.
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
                        src="src\assets\Mediterranea.png"
                        alt="card-image"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        <strong>Dieta Mediterranea</strong>
                    </Typography>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus eaque placeat sit dolorum repudiandae quae commodi esse reiciendis? Error reiciendis molestias fuga ut quisquam impedit distinctio quasi dolores esse molestiae.
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
                        src="src\assets\Paleo.png"
                        alt="card-image"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        <strong>Dieta Paleo</strong>
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione corporis vero officiis fugit deserunt, minus voluptatibus reprehenderit adipisci dolor nihil illum sapiente eos rem, quaerat repellat ad quas earum ipsa.
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
                        src="src\assets\Vegetariana.png"
                        alt="card-image"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        <strong>Dieta Vegetariana</strong>
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas cumque hic suscipit unde amet corporis repudiandae facilis cum harum, delectus eligendi, assumenda fugiat! Dolore deserunt dolor illo neque officiis numquam?
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