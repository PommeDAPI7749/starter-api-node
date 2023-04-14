const mongoose = require("mongoose")

async function connectionMongoDB() {
    try {
        await mongoose.connect(process.env.MongoConnectionSTR)
        console.log("Connecté à mongodb")
    } catch (e) {
        console.log("Problème de connexion")
    }
}

module.exports = connectionMongoDB