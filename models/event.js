const mongoose = require('./connection.js')

const EventSchema = new mongoose.Schema({
    name: String,
    date: Date,
    location: String,
    eventId: mongoose.Types.ObjectId
})

const EventCollection = mongoose.model('EventSchema', EventSchema)

const getAllEvent = () => {
    return EventCollection.find({})
}

const getAllEventByType = (eventId) => {
    return EventCollection.find({eventId: eventId})
}

const getSingleEvent = (id) => {
    return EventCollection.findById(id)
}

const createEvent = (eventData) => {
    return EventCollection.create(eventData)
}

const updateEvent = (id, eventData) => {
    return EventCollection.updateOne({_id: id}, eventData)
}

const deleteEvent = (id) => {
    return EventCollection.deleteOne({_id: id})
}

module.exports = {
    getAllEvent,
    getAllEventByType,
    getSingleEvent,
    createEvent,
    updateEvent,
    deleteEvent
}