const express = require('express')
const Phone = require('../models/phone')
const router = express.Router()

module.exports = router

router.post('/phones', async (req, res) => {
    const data = new Phone({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        description: req.body.description,
        color: req.body.color,
        price: req.body.price,
        imageFileName: req.body.imageFileName,
        screen: req.body.screen,
        processor: req.body.processor,
        ram: req.body.ram
    })

    try{
        const dataToSave = await data.save()
        res.status(200).json(dataToSave)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})


router.get('/phones', async (req, res) => {
    try{
        const data = await Phone.find()
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.patch('/phones/:id', async (req, res) => {
    try{
        const id = req.params.id
        const updatedData = req.body
        const options = { new: true }

        const result = await Phone.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch(error){
        res.status(400).json({ message: error.message })
    }
})

router.delete('/phones/:id', async (req, res) => {
    try{
        const id = req.params.id
        const data = await Phone.findByIdAndDelete(id)
        
        res.send(`${data.name} has been deleted...`)
    }
    catch(error){
        res.status(400).json({ message: error.message })
    }
})