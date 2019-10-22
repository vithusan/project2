const mongoose = require('./connection.js')

const CarSchema = new mongoose.Schema({
    make: String,
    model: String,
    year: Number,
    type: String,
    transmission: String,
    description: String
})

const CarCollection = mongoose.model('CarSchema', CarSchema)

const getAllCar = () => {
    return CarCollection.find({})
}

const getSingleCar = (id) => {
    return CarCollection.findById(id)
}

const createCar = (typeData) => {
    return CarCollection.create(typeData)
}

const updateCar = (id, typeData) => {
    return CarCollection.updateOne({_id: id}, typeData)
}

const deleteCar = (id) => {
    return CarCollection.deleteOne({_id: id})
}

module.exports = {
    getAllCar,
    getSingleCar,
    createCar,
    updateCar,
    deleteCar
}