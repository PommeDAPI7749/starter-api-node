const mongoose = require('mongoose')

const exempleSchema = mongoose.Schema({
    title: { type: String, require: true },
})

module.exports = mongoose.model("Exemple", exempleSchema);