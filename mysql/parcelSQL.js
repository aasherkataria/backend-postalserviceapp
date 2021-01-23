const mysql = require('mysql');
require('dotenv/config');

//create a connection
const db = mysql.createConnection({
    host : process.env.host,
    user : process.env.DBUSERNAME,
    password : process.env.password,
    database : process.env.database
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql Connected...');
});

const createPackage = (parcelInfo) => {

    function makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
        for (var i = 0; i < 12; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      
        return text;
      }
    
        //create data first
        let parcel = {
            trackingID : makeid(),
            destination : parcelInfo.destination,
            startingPoint : parcelInfo.starting,
            currentPoint : parcelInfo.starting,
            customerName : parcelInfo.customerName
        };

        let sql = 'INSERT INTO packages SET ?';
        let query = db.query(sql, parcel, (err, result) => {
            if (err) throw err;
            // console.log(result);
        });
}

const getPackage = (trackingId) => {
    console.log(trackingId);
    let sql = `SELECT * FROM packages WHERE trackingId =  CONCAT("${trackingId}")`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        return result;
    });

    console.log(query);
}

module.exports = {createPackage, getPackage};