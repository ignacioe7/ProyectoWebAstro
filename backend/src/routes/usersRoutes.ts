import express from 'express';
import * as usersController from '../controllers/usersController';

const router = express.Router();

// Route to get all users
router.get('/', usersController.getUsers);

// Route to get a user by id
router.get('/:id', usersController.getUser);

// Route to create a new user
router.post('/', usersController.addUser);

// Route to update a user
router.put('/:id', usersController.updateUser);

// Route to delete a user
router.delete('/:id', usersController.deleteUser);

export default router;