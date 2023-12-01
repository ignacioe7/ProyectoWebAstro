import express from "express";
import db from "../db";

export const getWeightsByUserId = (
  request: express.Request,
  response: express.Response
) => {
  const query = "SELECT * FROM weight WHERE id_user = ?";
  db.query(query, [request.params.id], (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      response.status(500).json({ error: "Internal server error" });
      return;
    }
    response.status(200).json(results);
  });
};

export const addWeight = (
  request: express.Request,
  response: express.Response
) => {
  const weightData = {
    ...request.body,
    date: new Date(),
  };

  const query = "INSERT INTO weight SET ?";
  db.query(query, weightData, (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      response.status(500).json({ error: "Internal server error" });
      return;
    }
    response.status(200).json(results);
  });
};

interface WeightData {
  id_user: number;
  weight: number;
  date: string;
}

export const addWeightAdmin = (
  request: express.Request,
  response: express.Response
) => {
  const weightDataArray: WeightData[] = request.body;

  const query = "INSERT INTO weight SET ?";

  weightDataArray.forEach((weightData: WeightData) => {
    db.query(query, weightData, (error, results) => {
      if (error) {
        console.error("Error executing query:", error);
        response.status(500).json({ error: "Internal server error" });
        return;
      }
    });
  });

  response.status(200).json({ message: "Weights inserted successfully" });
};

export const deleteWeight = (
  request: express.Request,
  response: express.Response
) => {
  const query = "DELETE FROM weight WHERE id_user = ?";
  db.query(query, [request.params.id], (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      response.status(500).json({ error: "Internal server error" });
      return;
    }
    response.send("Weight deleted successfully.");
  });
};
