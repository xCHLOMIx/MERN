require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')

// Listening to the PORT
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log('Successfully connected and Listening on port', PORT)
        })
    })
    .catch(err => {
        console.log(err)
    })

// Middleware
app.use(cors({
    origin : 'http://localhost:5173',
    methods : ['GET', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders : 'Content-Type'
}))

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/workouts', workoutRoutes)