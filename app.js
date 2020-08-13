const express = require('express');
const config = require('config');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

app.use(express.json({ extended: true }));

app.use('/t', require('./routes/redirect.routes'));
app.use('/api/link', require('./routes/link.routes'));
app.use('/api/auth', require('./routes/auth.routes'));

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });

}

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