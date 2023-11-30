import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import React, { useState, useEffect } from "react";

type Routine = {
  id_routine: number;
  name: string;
  description: string;
  url: string;
  exercises: string;
};

export function CardDefault() {
  const [routines, setRoutines] = useState<Routine[]>([]);
  const [showExercisesId, setShowExercisesId] = useState<number | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/routines")
      .then((response) => response.json())
      .then((data) => setRoutines(data));
  }, []);
  return (
    <div className="grid justify-items-center grid-cols-1 gap-10 mx-auto lg:grid-cols-2 ">
      {routines.map((routine) => (
        <Card className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src={routine.url} alt="card-image" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              <strong>{routine.name}</strong>
            </Typography>
            <Typography className="mb-4 mt-8 font-bold">
              {routine.description}
            </Typography>
            <Typography className="mt-4 mb-2">
              {showExercisesId === routine.id_routine && (
                <ul className="list-disc list-inside space-y-2 text-zinc-900 font-semibold">
                  {routine.exercises.split(",").map((exercise, index) => (
                    <li key={index}>{exercise}</li>
                  ))}
                </ul>
              )}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a href="#">
              <button
                className="h-10 px-6 font-semibold rounded-md bg-black text-white"
                onClick={(event) => {
                  event.preventDefault();
                  showExercisesId === routine.id_routine 
                    ? setShowExercisesId(null) 
                    : setShowExercisesId(routine.id_routine);
                }}
              >
                {showExercisesId === routine.id_routine ? 'Leer menos' : 'Leer más'}
              </button>
            </a>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
