const express = require('express')
const Phone = require('../models/phone')
const router = express.Router()

module.exports = router

router.post('/phones', async (req, res) => {
    const { 
        name,
        manufacturer,
        description,
        color,
        price,
        screen,
        processor,
        ram
    } = req.body
    const data = new Phone({
        name,
        manufacturer,
        description,
        color,
        price,
        screen,
        processor,
        ram
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

router.put('/phones/:id', async (req, res) => {
    console.log(req.body)
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