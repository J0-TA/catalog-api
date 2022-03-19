require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes')
const cors = require('cors')

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

const whitelist = [
    'http://localhost:3000',
]

const corsOptions = {
    origin: function(origin, callback){
        if(!origin) return callback(null, true);
        if(whitelist.indexOf(origin) === -1){
          var msg = `The CORS policy for this site does not 
                    allow acces from the specified Origin.`
          return callback(new Error(msg), false);
        }
        return callback(null, true);
      },
    credentials: true
}

const app = express()

app.use(express.json())
app.use(cors(corsOptions))
app.use('/api', routes)
app.listen(8000, () => {
    console.log(`Server Started at ${8000}`)
})

module.exports = app