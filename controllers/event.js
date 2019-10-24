const express = require('express')
const eventApi = require('../models/event.js')
const eventRouter = express.Router()

eventRouter.get('/event/new', (req, res) => {
    res.render('event/createEvent')
})

eventRouter.get('/eevnt/new/:eventId', (req, res) => {
    res.render('/event/createEvent', {eventId: req.params.eventId})
})
eventRouter.get('/event/edit/:id', (req, res) =>{
    eventApi.getSingleEvent(req.params.id)
    .then((updateSingleEvent) => {
        res.render('event/updateEvent', {updateSingleEvent})
    })
})

eventRouter.get('/event', (req, res) => {
    eventApi.getAllEvent()
    .then((allEvent) => {
        // res.json(allEvent)
        res.render('event/allEvent', {allEvent})
    })
})

eventRouter.get('/event/:id', (req, res) => {
    eventApi.getSingleEvent(req.params.id)
    .then((singleEvent) => {
        // res.json(singleEvent)
        res.render('event/singleEvent', {singleEvent})
    })
})

eventRouter.post('/event', (req, res) => {
    eventApi.createEvent(req.body)
    .then((createdEvent) => {
        // res.json(createdEvent)
        res.redirect(`/event/${req.params.eventId}`)
    })
})

eventRouter.put('/event/:id', (req, res) => {
    eventApi.updateEvent(req.params.id, req.body)
    .then((updatedEvent) => {
        // res.json(updatedEvent)
        res.redirect(`/event/${req.params.id}`)
    })
})

eventRouter.delete('/event/:id', (req, res) => {
    eventApi.deleteEvent(req.params.id)
    .then((deletedEvent) => {
        // res.json(deletedEvent)
        res.redirect('/event')
    })
})

module.exports = {
    eventRouter
}