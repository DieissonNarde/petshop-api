import PostService from '../services/post.service.js';

async function createPost(req, res, next) {
  try {
    let post = req.body;

    if (!post.titulo || !post.conteudo || !post.comentarios) {
      throw new Error('Titulo, Conteúdo e Comentarios é obrigatório.');
    }
    await PostService.createPost(post);
    res.end();
    logger.info(`POST /post - ${JSON.stringify(post)}`);
  } catch (err) {
    next(err);
  }
}

async function getPosts(req, res, next) {
  try {
    res.send(await PostService.getPosts());
    logger.info(`GET /post`);
  } catch (err) {
    next(err);
  }
}

async function updatePost(req, res, next) {
  try {
    let post = req.body;

    if (!post.postId || !post.titulo || !post.conteudo) {
      throw new Error('Post ID, Titulo, Conteudo é obrigatório.');
    }
    await PostService.updatePost(post);
    res.end();
    logger.info(`PUT /post - ${JSON.stringify(post)}`);
  } catch (err) {
    next(err);
  }
}

async function deletePost(req, res, next) {
  try {
    res.send(await PostService.deletePost(req.params.id));
    logger.info(`DELETE /post`);
  } catch (err) {
    next(err);
  }
}

async function createComentario(req, res, next) {
  try {
    let comentario = req.body;

    if (!comentario.postId) {
      throw new Error('Post ID é obrigatório.');
    }
    await PostService.createComentario(comentario);
    res.end();
    logger.info(`POST /post - ${JSON.stringify(comentario)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createPost,
  getPosts,
  deletePost,
  updatePost,
  createComentario,
};
