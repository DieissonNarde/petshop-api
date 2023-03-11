import Servico from '../models/servico.model.js';
import Animal from '../models/animal.model.js';

async function insertServico(servico) {
  try {
    return await Servico.create(servico);
  } catch (err) {
    throw err;
  }
}

async function getAnimais() {
  try {
    return await Servico.findAll();
  } catch (err) {
    throw err;
  }
}

async function getServico(id) {
  try {
    return await Servico.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function getServicosPorAnimal(animalId) {
  try {
    return await Servico.findAll({
      where: {
        animalId,
      },
      include: [
        {
          model: Animal,
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

async function deleteServico(id) {
  try {
    return await Servico.destroy({
      where: {
        servicoId: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function updateServico(servico) {
  try {
    await Servico.update(servico, {
      where: {
        servicoId: servico.servicoId,
      },
    });

    return await getServico(servico.servicoId);
  } catch (err) {
    throw err;
  }
}

export default {
  insertServico,
  getAnimais,
  getServicosPorAnimal,
  getServico,
  updateServico,
  deleteServico,
};
