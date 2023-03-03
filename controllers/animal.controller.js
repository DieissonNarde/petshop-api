import AnimalService from '../services/animal.service.js';

async function createAnimal(req, res, next) {
  try {
    let animal = req.body;
    if (!animal.nome || !animal.tipo || !animal.proprietario_id) {
      throw new Error('Nome, Tipo e ID do Proprietario são obrigatórios.');
    }
    animal = await AnimalService.createAnimal(animal);
    res.send(animal);
    logger.info(`POST /animal - ${JSON.stringify(animal)}`);
  } catch (err) {
    next(err);
  }
}

async function getAnimais(req, res, next) {
  try {
    res.send(await AnimalService.getAnimals());
    logger.info('GET /animal');
  } catch (err) {
    next(err);
  }
}

async function getAnimal(req, res, next) {
  try {
    res.send(await AnimalService.getAnimal(req.params.id));
    logger.info('GET /animal');
  } catch (err) {
    next(err);
  }
}

async function getAnimaisPorProprietario(req, res, next) {
  try {
    res.send(
      await AnimalService.getAnimaisPorProprietario(req.params.proprietario_id)
    );
    logger.info('GET /animal');
  } catch (err) {
    next(err);
  }
}

async function deleteAnimal(req, res, next) {
  try {
    await AnimalService.deleteAnimal(req.params.id);
    res.end();
    logger.info('DELETE /animal');
  } catch (err) {
    next(err);
  }
}

async function updateAnimal(req, res, next) {
  try {
    let animal = req.body;
    if (
      !animal.animal_id ||
      !animal.nome ||
      !animal.tipo ||
      !animal.proprietario_id
    ) {
      throw new Error('ID, Nome, Tipo e ID do Proprietario são obrigatórios.');
    }
    animal = await AnimalService.updateAnimal(animal);
    res.send(animal);
    logger.info(`PUT /animal - ${JSON.stringify(animal)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createAnimal,
  getAnimais,
  getAnimaisPorProprietario,
  getAnimal,
  deleteAnimal,
  updateAnimal,
};
