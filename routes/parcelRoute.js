const employee = require('../models/parcel');
const express = require('express');

const router = express.Router();


router.post('/', (req, res) => {

    // create a parcel
    const parcel = {...{destination, starting, customerName} = 
    req.body };
    // insert into database
    employee.parcel(parcel);
    // return original 
    res.json("Parcel Entered Successfully");

});

router.get('/:trackingNumber', async (req, res) => {
    const parcel = await employee.getPackage(req.params.trackingNumber);
    // return the package in form of json
    res.json(parcel);
});

router.get('/', async (req, res) => {
    const parcel = await employee.getAllPackages();
    res.json(parcel);
});

module.exports = router;