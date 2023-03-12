import PostRepository from '../repositories/post.repository.js';

async function createPost(post) {
  await PostRepository.createPost(post);
}

async function getPosts() {
  return await PostRepository.getPosts();
}

async function updatePost(post) {
  await PostRepository.updatePost(post);
}

async function deletePost(postId) {
  await PostRepository.deletePost(postId);
}

async function createComentario(comentario, postId) {
  await PostRepository.createComentario(comentario, postId);
}

export default {
  createPost,
  getPosts,
  deletePost,
  updatePost,
  createComentario,
};
