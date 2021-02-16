const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(cors());
app.use(express.json());

const parcelRoute = require('./routes/parcelRoute');


app.use('/employee/parcel', parcelRoute);

app.listen('3000', () => {
    console.log('server started on port 3000');
}); 