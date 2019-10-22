const express = require('express')
const eventApi = require('../models/event.js')
const eventRouter = express.Router()

eventRouter.get('/event', (req, res) => {
    eventApi.getAllEvent()
    .then((allEvent) => {
        res.json(allEvent)
    })
})

eventRouter.get('/event/:id', (req, res) => {
    eventApi.getSingleEvent(req.params.id)
    .then((singleEvent) => {
        res.json(singleEvent)
    })
})

eventRouter.post('/event', (req, res) => {
    eventApi.createEvent(req.body)
    .then((createdEvent) => {
        res.json(createdEvent)
    })
})

eventRouter.put('/event/:id', (req, res) => {
    eventApi.updateEvent(req.params.id, req.body)
    .then((updatedEvent) => {
        res.json(updatedEvent)
    })
})

eventRouter.delete('/event/:id', (req, res) => {
    eventApi.deleteEvent(req.params.id)
    .then((deletedEvent) => {
        res.json(deletedEvent)
    })
})

module.exports = {
    eventRouter
}