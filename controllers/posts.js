import mongoose from 'mongoose';

import modelSchema from '../models/modelSchema.js';


// mendapatkan data => pakai method .find()
export const getPost = async (req, res) => {
    try {
        const dapatkanPost = await modelSchema.find()
        if(!dapatkanPost) throw Error('gagal saat mendapatkan data')

        res.status(200).json(dapatkanPost)
        
    } catch (error) {
        res.status(408).json({
            message: error.message
        })
    }
}


// get spesifik post/mendapatkan data secara spesifik dari id => pakai method .findById()
export const getPostById = async (req, res) => {
    const reqParams = req.params

    const dapatkanDataById = await modelSchema.findById(reqParams.id)
    if(!dapatkanDataById) throw Error('gagal saat mendapatkan data')

    res.status(200).json(dapatkanDataById)
}



// membuat post => pakai method .save()
export const createPost = async (req, res) => {
    const reqBody = req.body

    const newPost = new modelSchema({
        nama: reqBody.nama,
        deskripsi : reqBody.deskripsi
    })

    const savePost = await newPost.save()

    try {
        res.status(202).json(savePost)
    } catch (error) {
        res.status(408).json(err)
    }
}



// patch data / update data berdasarkan Id=> pakai method .findByIdAndUpdate()
export const updatePostById = async (req, res) => {
    const reqParams = req.params
    const reqBody = req.body

    const { id : _id} = reqParams

    try {
        const patchDataById = await modelSchema.findByIdAndUpdate(_id, reqBody, {new:true})
        
        res.status(202).json(patchDataById)

    } catch (error) {
        res.status(408).json(err)
    }
}



// delete data berdasarkan  => pakai method findByIdAndDelete()
export const deletePostById =  async (req, res) => {
    // const reqBody = req.body
    const reqParams = req.params

    const {id : _id} = reqParams

    try {
        await modelSchema.findByIdAndDelete(_id)

        res.status(200).json({message: 'Data successfully deleted'})
    
    } catch (error) {
        res.status(408).json(err)
    }
}