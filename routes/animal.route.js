import express from 'express';
import AnimalController from '../controllers/animal.controller.js';

const router = express.Router();

router.post('/', AnimalController.createAnimal);
router.get('/', AnimalController.getAnimals);
router.get('/:id', AnimalController.getAnimal);
router.get('/:proprietario_id', AnimalController.getAnimalPorProprietario);
router.delete('/:id', AnimalController.deleteAnimal);
router.put('/', AnimalController.updateAnimal);

export default router;