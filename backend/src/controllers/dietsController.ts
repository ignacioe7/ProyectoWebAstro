import express from 'express';
import db from '../db';

// get all diets
export const getDiets = (request: express.Request, response: express.Response) => {
  const query = `
    SELECT diets.*, GROUP_CONCAT(foods.name) as foods
    FROM diets
    LEFT JOIN diets_foods ON diets.id_diet = diets_foods.id_diet
    LEFT JOIN foods ON diets_foods.id_food = foods.id_food
    GROUP BY diets.id_diet
  `;
  db.query(query, (error, results) => {
    if (error) throw error;
    response.send(results);
  });
};

// Fetch a single diet by id
export const getDiet = (request: express.Request, response: express.Response) => {
  db.query('SELECT * FROM diets WHERE id_diet = ?', [request.params.id], (error, results) => {
    if (error) throw error;
    response.send(results);
  });
};

// Add a new diet
export const addDiet = (request: express.Request, response: express.Response) => {
  db.query('INSERT INTO diets SET ?', request.body, (error, results) => {
    if (error) throw error;
    response.status(201).send(`Diet added with ID: ${results.insertId}`);
  });
};

// Update an existing diet
export const updateDiet = (request: express.Request, response: express.Response) => {
  db.query('UPDATE diets SET ? WHERE id_diet = ?', [request.body, request.params.id], (error, results) => {
    if (error) throw error;
    response.send('Diet updated successfully.');
  });
};

// Delete a rotuine
export const deleteDiet= (request: express.Request, response: express.Response) => {
  db.query('DELETE FROM diets WHERE id_diet = ?', [request.params.id], (error, results) => {
    if (error) throw error;
    response.send('Diet deleted successfully.');
  });
};