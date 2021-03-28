const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongooseConnect = require('./mongodb/mongoUtil');
require('dotenv/config');

const app = express();
mongooseConnect.connect(); // connect to mongodb

app.use(cors());
app.use(express.json());

const parcelRoute = require('./routes/parcelRoute');
const employeeLogin = require('./routes/employeeLogin');

app.use('/employee/parcel', parcelRoute);
app.use('/employee', employeeLogin);

app.set('port', process.env.PORT || 3000);


app.listen(app.get('port'));