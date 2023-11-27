import express from 'express';
import db from '../db';


// Fetch all users
export const getUsers = (request: express.Request, response: express.Response) => {
  db.query('SELECT * FROM users', (error, results) => {
    if (error) throw error;
    response.send(results);
  });
};

// Fetch a single user by id
export const getUser = (request: express.Request, response: express.Response) => {
  db.query('SELECT * FROM users WHERE id_user = ?', [request.params.id], (error, results) => {
    if (error) throw error;
    response.send(results);
  });
};

// Add a new user
export const addUser = (request: express.Request, response: express.Response) => {
  db.query('INSERT INTO users SET ?', request.body, (error, results) => {
    if (error) throw error;
    response.status(201).send(`User added with ID: ${results.insertId}`);
  });
};

// Update an existing user
export const updateUser = (request: express.Request, response: express.Response) => {
  db.query('UPDATE users SET ? WHERE id_user = ?', [request.body, request.params.id], (error, results) => {
    if (error) throw error;
    response.send('User updated successfully.');
  });
};

// Delete a user
export const deleteUser = (request: express.Request, response: express.Response) => {
  db.query('DELETE FROM users WHERE id_user = ?', [request.params.id], (error, results) => {
    if (error) throw error;
    response.send('User deleted successfully.');
  });
};