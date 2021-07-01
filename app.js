import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'

import postsRoutes from './routes/posts.js'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5002

// connect to DB
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, ()=>{
        console.log(`running on http://localhost:${PORT}`)
    })
    console.log('connected to MongoDB !')
}).catch((err) => {
    console.log(err)
});


// middleware untuk membuat body bisa membaca json
app.use(express.json());


// middleware untuk mengatasi cors origin policy -> biasanya digunakan agara bisa terhubung dengan client
app.use(cors())

app.use('/posts', postsRoutes)