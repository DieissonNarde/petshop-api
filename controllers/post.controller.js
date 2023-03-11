async function createPost(req, res, next) {
  try {
    let post = req.body;

    if (!post.postId) {
      throw new Error('Post ID é obrigatório.');
    }
    await PostService.createPostInfo(post);
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

    if (!post.postId) {
      throw new Error('Post ID é obrigatório.');
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
    res.send(await PostService.deletePost(parseInt(req.params.id)));
    logger.info(`DELETE /post`);
  } catch (err) {
    next(err);
  }
}

export default {
  createPost,
  getPosts,
  deletePost,
  updatePost,
};
