const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Author = new Schema({
    name: {type: String, required: true, index: {unique: true}},
    email: {type: String, required: true}
})

module.exports = mongoose.model('Author', Author)
