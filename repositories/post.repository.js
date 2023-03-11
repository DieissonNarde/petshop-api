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

async function updatePost(post) {
  try {
    const mongoose = await connect();
    const Post = mongoose.model('Post', PostSchema);
    await Post.findOneAndUpdate({ productId: post.productId }, post);
  } catch (err) {
    throw err;
  }
}

async function createComentario(comentario, postId) {
  try {
    const post = await getPost(postId);
    post.comentarios.push(comentario);
    await updatePost(post);
  } catch (err) {
    throw err;
  }
}

export default {
  createPost,
  updatePost,
  getPosts,
  createComentario,
};
