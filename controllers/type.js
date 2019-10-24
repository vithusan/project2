const express = require('express')
const typeApi = require('../models/type.js')
const carApi = require('../models/car.js')
const typeRouter = express.Router()


typeRouter.get('/type/new', (req, res) => {
    res.render('type/createType')
})

typeRouter.get('/type/edit/:id', (req, res) => {
    typeApi.getSingleType(req.params.id)
    .then((updatedType) => {
        res.render('type/updateType', {updatedType})
    })
})

typeRouter.get('/type', (req, res) => {
    typeApi.getAllType()
    .then((allType) => {
        // res.json(allType)
        res.render('type/allType', {allType})
    })
    .catch((error) => {
        res.json(error)
    })
})

typeRouter.get('/type/:id', (req, res) => {
    typeApi.getSingleType(req.params.id)
    .then((singleType) => {
        // res.json(singleType)
        // res.render('type/singleType', {singleType})
        carApi.getAllCarByType(req.params.id)
        .then((typeCar) => {
            res.render('type/singleType', {singleType, typeCar})
        })
    })
    .catch((error) => {
        res.json(error)
    })
})

typeRouter.post('/type', (req, res) => {
    typeApi.createType(req.body)
    .then((createdType) => {
        // res.json(createdType)
        res.redirect('/type')
    })
    .catch((error) => {
        res.json(error)
    })
})

typeRouter.put('/type/:id', (req, res) => {
    typeApi.updateType(req.params.id, req.body)
    .then((updatedType) => {
        // res.json(updatedType)
        res.redirect(`/type/${req.params.id}`)
    })
     .catch((error) => {
         res.json(error)
     })
})

typeRouter.delete('/type/:id', (req, res) => {
    typeApi.deleteType(req.params.id)
    .then((deletedType) => {
        // res.json(deletedType)
        res.redirect('/type')
    })
    .catch((error) => {
        res.json(error)
    })
})

module.exports = {
    typeRouter
}