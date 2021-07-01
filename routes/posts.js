import express from 'express'

import {getPost, getPostById, createPost, updatePostById, deletePostById} from '../controllers/posts.js'


const router = express.Router()


router.get('/', getPost)
router.get('/:id', getPostById)
router.post('/', createPost)
router.patch('/:id', updatePostById)
router.delete('/:id',deletePostById)

export default router