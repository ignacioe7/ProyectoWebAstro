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

// Route to get all stats from a user by id
router.get('/:id/yearlyStats', usersController.getYearlyStats);

// Route to create a new user for registration
router.post('/register', usersController.registerUser);

// Route found an user for login
router.post('/login', usersController.loginUser);

// Route to verify a recaptcha
router.post('/verifyRecaptcha', usersController.verifyRecaptcha)

export default router;