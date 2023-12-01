import express from 'express';
import { getWeightsByUserId, addWeight, deleteWeight, addWeightAdmin } from '../controllers/weightController';

const router = express.Router();

// Route to get all weights
router.get('/:id', getWeightsByUserId);

// Route to create a new weight
router.post('/', addWeight);

// Route to create a new weight by admin
router.post('/admin', addWeightAdmin);

// Route to delete a weight
router.delete('/:id', deleteWeight);

export default router;