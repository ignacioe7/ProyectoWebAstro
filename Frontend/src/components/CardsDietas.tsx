import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import React, { useState, useEffect } from "react";

type Diet = {
  id_diet: number;
  name: string;
  description: string;
  url: string;
  foods: string;
};

export function CardDefault() {
  const [diets, setDiets] = useState<Diet[]>([]);
  const [showFoodsId, setFoodsId] = useState<number | null>(null);
  useEffect(() => {
    fetch("http://localhost:3000/diets")
      .then((response) => response.json())
      .then((data) => setDiets(data));
  }, []);

  return (
    <div className="grid justify-items-center grid-cols-1 gap-10 mx-auto lg:grid-cols-2">
      {diets.map((diet) => (
        <Card className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src={diet.url} alt="card-image" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              <strong>{diet.name}</strong>
            </Typography>
            <Typography className="mb-4 mt-8 font-bold">
              {diet.description}
            </Typography>
            <Typography className="mt-4 mb-2">
              {showFoodsId === diet.id_diet && (
                <ul className="list-disc list-inside space-y-2 text-zinc-900 font-semibold">
                  {diet.foods.split(",").map((food, index) => (
                    <li key={index}>{food}</li>
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
                  showFoodsId === diet.id_diet 
                    ? setFoodsId(null) 
                    : setFoodsId(diet.id_diet);
                }}
              >
                {showFoodsId === diet.id_diet ? 'Leer menos' : 'Leer más'}
              </button>
            </a>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
