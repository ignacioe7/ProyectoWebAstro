import express from 'express';
import db from '../db';

export const getRoutines = (request: express.Request, response: express.Response) => {
  db.query('SELECT * FROM routines', (error, results) => {
    if (error) throw error;
    response.send(results);
  });
};

// Fetch a single routine by id
export const getRoutine = (request: express.Request, response: express.Response) => {
  db.query('SELECT * FROM routines WHERE id_routine = ?', [request.params.id], (error, results) => {
    if (error) throw error;
    response.send(results);
  });
};

// Add a new routine
export const addRoutine = (request: express.Request, response: express.Response) => {
  db.query('INSERT INTO routines SET ?', request.body, (error, results) => {
    if (error) throw error;
    response.status(201).send(`Routine added with ID: ${results.insertId}`);
  });
};

// Update an existing routine
export const updateRoutine = (request: express.Request, response: express.Response) => {
  db.query('UPDATE routines SET ? WHERE id_routine = ?', [request.body, request.params.id], (error, results) => {
    if (error) throw error;
    response.send('Routine updated successfully.');
  });
};

// Delete a rotuine
export const deleteRoutine= (request: express.Request, response: express.Response) => {
  db.query('DELETE FROM routines WHERE id_routine = ?', [request.params.id], (error, results) => {
    if (error) throw error;
    response.send('Routine deleted successfully.');
  });
};
