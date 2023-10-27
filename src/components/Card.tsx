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
        <div className="grid w-full grid-cols-1 gap-10 mx-auto lg:grid-cols-2">
            <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-56">
                    <img
                        src="src\assets\espalda-biceps.png"
                        alt="card-image"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        UI/UX Review Check
                    </Typography>
                    <Typography>
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to &quot;Naviglio&quot; where you can enjoy the main
                        night life in Barcelona.
                    </Typography>
                </CardBody>
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
                        UI/UX Review Check
                    </Typography>
                    <Typography>
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to &quot;Naviglio&quot; where you can enjoy the main
                        night life in Barcelona.
                    </Typography>
                </CardBody>
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
                        UI/UX Review Check
                    </Typography>
                    <Typography>
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to &quot;Naviglio&quot; where you can enjoy the main
                        night life in Barcelona.
                    </Typography>
                </CardBody>
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
                        UI/UX Review Check
                    </Typography>
                    <Typography>
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to &quot;Naviglio&quot; where you can enjoy the main
                        night life in Barcelona.
                    </Typography>
                </CardBody>
            </Card>
        </div>
    );
}