import { connect } from './mongo.db.js';
import PostSchema from '../schemas/post.schema.js';

async function createPost(post) {
  try {
    const mongoose = await connect();
    const Post = mongoose.model('Post', PostSchema);
    post = new Post(post);
    await post.save();
  } catch (err) {
    throw err;
  }
}

async function getPosts() {
  try {
    const mongoose = await connect();
    const Post = mongoose.model('Post', PostSchema);
    return await Post.find({}).exec();
  } catch (err) {
    throw err;
  }
}

async function getPost(postId) {
  try {
    const mongoose = await connect();
    const Post = mongoose.model('Post', PostSchema);
    return await Post.findOne({ _id: postId }).exec();
  } catch (err) {
    throw err;
  }
}

async function updatePost(post) {
  try {
    const mongoose = await connect();
    const Post = mongoose.model('Post', PostSchema);
    await Post.findOneAndUpdate({ _id: post.postId }, post);
  } catch (err) {
    throw err;
  }
}

async function deletePost(postId) {
  try {
    const mongoose = await connect();
    const Post = mongoose.model('Post', PostSchema);
    return await Post.deleteOne({ _id: postId });
  } catch (err) {
    throw err;
  }
}

async function createComentario(comentario) {
  try {
    const post = await getPost(comentario.postId);
    post.comentarios.push({
      nome: comentario.nome,
      conteudo: comentario.conteudo,
    });
    await updatePost(post);
  } catch (err) {
    throw err;
  }
}

export default {
  createPost,
  updatePost,
  getPosts,
  deletePost,
  createComentario,
};
