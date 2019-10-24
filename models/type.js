const mongoose = require('./connection.js')

const TypeSchema = new mongoose.Schema({
    name: String,
    description: String,
    picture: String
})

const TypeCollection = mongoose.model('TypeSchema', TypeSchema)

const getAllType = () => {
    return TypeCollection.find({})
}

const getSingleType = (id) => {
    return TypeCollection.findById(id)
}

const createType = (typeData) => {
    return TypeCollection.create(typeData)
}

const updateType = (id, typeData) => {
    return TypeCollection.updateOne({_id: id}, typeData)
}

const deleteType = (id) => {
    return TypeCollection.deleteOne({_id: id})
}


module.exports = {
    getAllType,
    getSingleType,
    createType,
    updateType,
    deleteType
}