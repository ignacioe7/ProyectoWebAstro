import express from 'express';
import { getHeightsByUserId, addHeight, deleteHeight } from '../controllers/heightController';

const router = express.Router();

// Route to get all heights
router.get('/:id', getHeightsByUserId);

// Route to create a new height
router.post('/', addHeight);

// Route to delete a height
router.delete('/:id', deleteHeight);

export default router;