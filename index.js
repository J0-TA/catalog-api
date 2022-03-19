require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes')
let mongoString = process.env.NODE_ENV === 'testing' 
    ? process.env.DATABASE_URI_TEST
    : process.env.DATABASE_URI

mongoose.connect(mongoString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const database = mongoose.connection
database.on('error', (error) => console.log(error))
database.once('connected', () => console.log('Database Connected'))

const app = express()

app.use(express.json())
app.use('/api', routes)
app.listen(3000, () => {
    console.log(`Server Started at ${8000}`)
})

module.exports = app