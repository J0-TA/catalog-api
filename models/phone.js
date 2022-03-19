const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    manufacturer: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    color: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    imageFileName: {
        required: true,
        type: String
    },
    screen: {
        required: true,
        type: String
    },
    processor: {
        required: true,
        type: String
    },
    ram: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Phone', dataSchema)