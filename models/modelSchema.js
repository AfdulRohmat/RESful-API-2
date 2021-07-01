import mongoose from 'mongoose';


const SchemaModel = mongoose.Schema({
    nama: {
        type: String,
        required: true,
    },
    deskripsi: {
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now
    }
})

const modelSchema = mongoose.model('modelSchemaYangBaru', SchemaModel)

export default modelSchema