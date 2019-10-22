const express = require('express')
const carApi = require('../models/car.js')
const carRouter = express.Router()

carRouter.get('/car', (req, res) => {
    carApi.getAllCar()
    .then((allCar) => {
        res.json(allCar)
    })
})

carRouter.get('/car/:id', (req, res) => {
    carApi.getSingleCar(req.params.id)
    .then((singleCar) => {
        res.json(singleCar)
    })
})

carRouter.post('/car' , (req, res) => {
    carApi.createCar(req.body)
    .then((createdCar) => {
        res.json(createdCar)
    })
})

carRouter.put('/car/:id' , (req, res) => {
    carApi.updateCar(req.params.id, req.body)
    .then((updatedCar) => {
        res.json(updatedCar)
    })
})

carRouter.delete('/car/:id' , (req, res) => {
    carApi.deleteCar(req.params.id)
    .then((deletedCar) => {
        res.json(deletedCar)
    })
})

module.exports = {
    carRouter
}