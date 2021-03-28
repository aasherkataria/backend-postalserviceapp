const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const mongoose = require('mongoose');
require('dotenv/config');

const connect = () => {
    mongoose.set('useUnifiedTopology', true);
    mongoose.connect(process.env.DB_CONNECTION,
        { useNewUrlParser: true }, () => {
        console.log('MongoDB Connected...');
    });
}

module.exports = {connect};

