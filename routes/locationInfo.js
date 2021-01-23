const location = require('../models/parcel');
const express = require('express');

const router = express.Router();


router.post('/', (res, req) => {
    console.log(req);

    const parcel = {...{destination, starting, customerName} = 
    req.body };

    location.parcel(parcel);
    // try {
    //     const parcel = await location.setLocation({
    //         dest: req.body.destination, 
    //         starting: req.body.starting,
    //         customer : req.body.customerName
    //     });
    //     res.json(removedPost);
    // } catch (err) {
    //     res.json({message: err});
    // }

});

module.exports = router;