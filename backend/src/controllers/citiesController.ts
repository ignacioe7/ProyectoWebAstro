import express from 'express';
import db from '../db';

// get all cities
export const getCities = (
    request: express.Request,
    response: express.Response
  ) => {
    const query = `
      SELECT cities.id_city, cities.name
      FROM cities
      WHERE id_region = ?
    `;
    db.query(query, [request.params.id], (error, results) => {
      if (error) {
        console.error("Error executing query:", error);
        response.status(500).json({ error: "Internal server error" });
        return;
      }
      response.send(results);
    });
  };

// get all regions
export const getRegions = (request: express.Request, response: express.Response) => {
  db.query('SELECT regions.id_region, regions.name FROM regions', (error, results) => {
    if (error) throw error;
    response.send(results);
  });
};