import express from "express";
import db from "../db";

export const getHeightsByUserId = (
  request: express.Request,
  response: express.Response
) => {
  const query = "SELECT * FROM height WHERE id_user = ?";
  db.query(query, [request.params.id], (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      response.status(500).json({ error: "Internal server error" });
      return;
    }
    response.status(200).json(results);
  });
};

export const addHeight = (
  request: express.Request,
  response: express.Response
) => {
  const heightData = {
    ...request.body,
    date: new Date(),
  };

  const query = "INSERT INTO height SET ?";
  db.query(query, heightData, (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      response.status(500).json({ error: "Internal server error" });
      return;
    }
    response.status(200).json(results);
  });
};

export const addHeightAdmin = (
  request: express.Request,
  response: express.Response
) => {
  const heightData = {
    ...request.body
  };

  const query = "INSERT INTO height SET ?";
  db.query(query, heightData, (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      response.status(500).json({ error: "Internal server error" });
      return;
    }
    response.status(200).json(results);
  });
};

export const deleteHeight = (
  request: express.Request,
  response: express.Response
) => {
  const query = "DELETE FROM height WHERE id_user = ?";
  db.query(query, [request.params.id], (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      response.status(500).json({ error: "Internal server error" });
      return;
    }
    response.send("Height deleted successfully.");
  });
};
