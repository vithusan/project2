const express = require('express')
const typeApi = require('../models/type.js')
const typeRouter = express.Router()

typeRouter.get('/type', (req, res) => {
    typeApi.getAllType()
    .then((allType) => {
        res.json(allType)
    })
})

typeRouter.get('/type/:id', (req, res) => {
    typeApi.getSingleType(req.params.id)
    .then((singleType) => {
        res.json(singleType)
    })
})

typeRouter.post('/type', (req, res) => {
    typeApi.createType(req.body)
    .then((createdType) => {
        res.json(createdType)
    })
})

typeRouter.put('/type/:id', (req, res) => {
    typeApi.updateType(req.params.id, req.body)
    .then((updatedType) => {
        res.json(updatedType)
    })
})

typeRouter.delete('/type/:id', (req, res) => {
    typeApi.deleteType(req.params.id)
    .then((deletedType) => {
        res.json(deletedType)
    })
})

module.exports = {
    typeRouter
}