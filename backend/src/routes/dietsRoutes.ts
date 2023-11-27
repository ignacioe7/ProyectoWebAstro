import express from 'express';
import { getDiets, getDiet, addDiet, updateDiet, deleteDiet } from '../controllers/dietsController';

const router = express.Router();

// Route to get list of diets
router.get('/', getDiets);

// Route to get a specific diet by id
router.get('/:id', getDiet);

// Route to create a new diet
router.post('/', addDiet);

// Route to update a diet
router.put('/:id', updateDiet);

// Route to delete a diet
router.delete('/:id', deleteDiet);

export default router;