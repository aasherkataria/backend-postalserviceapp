const location = require('../models/parcel');
const express = require('express');

const router = express.Router();


router.post('/', (req, res) => {

    // create a parcel
    const parcel = {...{destination, starting, customerName} = 
    req.body };
    // insert into database
    location.parcel(parcel);
    // return original 
    res.json("Parcel Entered Successfully");

});

router.get('/:trackingNumber', (req, res) => {
    const parcel = location.getPackage(req.params.trackingNumber);
    
    res.send(parcel);
});

module.exports = router;