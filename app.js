const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

app.use('/api/auth', require('./routes/auth.routes'));

//Starting server

const PORT = config.get('port') || 5000;

const start = async() => {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        app.listen(PORT, () => {
            console.log(`Started ${PORT}`);
        });
    } catch (err) {
        console.log('Server Error', err.message);
        process.exit(1);
    }
}

start();