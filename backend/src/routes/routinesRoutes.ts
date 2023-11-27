import express from 'express';
import { getRoutines, getRoutine, addRoutine, updateRoutine, deleteRoutine } from '../controllers/routinesController';

const router = express.Router();

// Route to get all routines
router.get('/', getRoutines);

// Route to get a specific routine by id
router.get('/:id', getRoutine);

// Route to create a new routine
router.post('/', addRoutine);

// Route to update a routine
router.put('/:id', updateRoutine);

// Route to delete a routine
router.delete('/:id', deleteRoutine);

export default router;