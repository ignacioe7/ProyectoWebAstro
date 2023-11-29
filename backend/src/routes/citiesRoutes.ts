import express from 'express';
import { getRegions, getCities } from '../controllers/citiesController';

const router = express.Router();

// Route to get list of diets
router.get('/', getRegions);

// Route to get a specific cities by id
router.get('/:id', getCities);

export default router;