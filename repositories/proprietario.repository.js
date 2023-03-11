import Proprietario from '../models/proprietario.model.js';

async function insertProprietario(proprietario) {
  try {
    return await Proprietario.create(proprietario);
  } catch (err) {
    throw err;
  }
}

async function getProprietarios() {
  try {
    return await Proprietario.findAll();
  } catch (err) {
    throw err;
  }
}

async function getProprietario(id) {
  try {
    return await Proprietario.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function deleteProprietario(id) {
  try {
    return await Proprietario.destroy({
      where: {
        proprietarioId: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function updateProprietario(proprietario) {
  try {
    await Proprietario.update(proprietario, {
      where: {
        proprietarioId: proprietario.proprietarioId,
      },
    });

    return await getProprietario(proprietario.proprietarioId);
  } catch (err) {
    throw err;
  }
}

export default {
  insertProprietario,
  getProprietarios,
  getProprietario,
  updateProprietario,
  deleteProprietario,
};
