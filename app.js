const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    authMiddleware = require('./middlewares/auth'),
    // exempleRoutes = require('./routes/exemple.js'),
    connectionMongoDB = require('./mongoDB/connection'),
    app = express();

connectionMongoDB()

app.use(cors());
app.use(bodyParser.json())

// app.use('/api/exemple', authMiddleware, exempleRoutes);

module.exports = app;