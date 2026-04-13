import express from 'express';
import { getPosts, getPost, createPost, updatePost, deletePost } from '../middleware/Controllers/postController.js';
const router = express.Router();

//API endpoint to get all posts
router.get('/', getPosts);

//get a single post by id
router.get('/:id', getPost);

//create a new post
router.post('/', createPost);

//update a post
router.put('/:id', updatePost);

//delete a post
router.delete('/:id', deletePost);

export default router;