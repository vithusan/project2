const express = require('express')
const carApi = require('../models/car.js')
const carRouter = express.Router()

carRouter.get('/car/new', (req, res) => {
    res.render('car/createCar')
})

carRouter.get('/car/new/:typeId', (req, res) => {
    res.render('car/createCar', {typeId: req.params.typeId})
})

carRouter.get('/car/edit/:id', (req, res) => {
    carApi.getSingleCar(req.params.id)
    .then((updateSingleCar) => {
        res.render('car/updateCar', {updateSingleCar})
    })
})

carRouter.get('/car', (req, res) => {
    carApi.getAllCar()
    .then((allCar) => {
        // res.json(allCar)
        res.render('car/allCar', {allCar})
    })
})

carRouter.get('/car/:id', (req, res) => {
    carApi.getSingleCar(req.params.id)
    .then((singleCar) => {
        // res.json(singleCar)
        res.render('car/singleCar', {singleCar})
    })
})

carRouter.post('/car' , (req, res) => {
    carApi.createCar(req.body)
    .then((createdCar) => {
        // res.json(createdCar)
        res.redirect(`/type/${req.body.typeId}`)
    })
})

carRouter.put('/car/:id', (req, res) => {
    carApi.updateCar(req.params.id, req.body)
    .then((updatedCar) => {
        // res.json(updatedCar)
        res.redirect(`/car/${req.params.id}`)
    })
})

carRouter.delete('/car/:id' , (req, res) => {
    carApi.deleteCar(req.params.id)
    .then((deletedCar) => {
        // res.json(deletedCar)
        res.redirect('/car')
    })
})

module.exports = {
    carRouter
}