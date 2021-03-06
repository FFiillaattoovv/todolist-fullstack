const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 5000;
const DB_URL = 'mongodb+srv://Petrov:007Database@cluster0.bydz4.mongodb.net/todolist?retryWrites=true&w=majority';

app.use(express.json());
app.use('/api/auth', require('./routes/auth.route'));

const start = async () => {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.error(e);
    }
};

start();