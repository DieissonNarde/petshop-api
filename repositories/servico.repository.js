import Servico from '../models/servico.model.js';
import Animal from '../models/animal.model.js';

async function insertServico(servico) {
  try {
    return await Servico.create(servico);
  } catch (err) {
    throw err;
  }
}

async function getServicos() {
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

async function getServicosPorAnimal(proprietarioId) {
  try {
    return await Servico.findAll({
      include: {
        model: Animal,
        where: { proprietarioId },
      },
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
  getServicos,
  getServicosPorAnimal,
  getServico,
  updateServico,
  deleteServico,
};
