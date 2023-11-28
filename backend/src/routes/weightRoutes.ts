import express from 'express';
import { getWeightsByUserId, addWeight, deleteWeight } from '../controllers/weightController';

const router = express.Router();

// Route to get all weights
router.get('/:id', getWeightsByUserId);

// Route to create a new weight
router.post('/', addWeight);

// Route to delete a weight
router.delete('/:id', deleteWeight);

export default router;