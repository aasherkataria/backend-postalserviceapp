const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(cors());
app.use(express.json());

const parcelRoute = require('./routes/parcelRoute');


app.use('/employee/parcel', parcelRoute);

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'));