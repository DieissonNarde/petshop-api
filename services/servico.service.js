import ServicoRepository from '../repositories/servico.repository.js';
import AnimalRepository from '../repositories/animal.repository.js';

async function createServico(servico) {
  return await ServicoRepository.insertServico(servico);
}

async function getServicos(proprietarioId) {
  if (proprietarioId) {
    let servicos = [];
    const animais = await AnimalRepository.getAnimaisPorProprietario(
      proprietarioId
    );

    for (animal in animais) {
      servicos.push(await ServicoRepository.getServicosPorAnimal(animal.id));
    }

    return servicos;
  }
  return await ServicoRepository.getServicos();
}

async function getServico(id) {
  return await ServicoRepository.getServico(id);
}

async function deleteServico(id) {
  await ServicoRepository.deleteServico(id);
}

async function updateServico(servico) {
  return await ServicoRepository.updateServico(servico);
}

export default {
  createServico,
  getServicos,
  getServico,
  deleteServico,
  updateServico,
};
