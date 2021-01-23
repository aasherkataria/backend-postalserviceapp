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

const setLocation = (parcelInfo) => {
    
        //create data first
        let parcel = {
            dest : parcelInfo.destination,
            startPoint : parcelInfo.starting,
            currentPoint : parcelInfo.starting,
            customer : parcelInfo.customerName
        };

        let sql = 'INSET INTO parcel SET ?';
        let query = db.query(sql, parcel, (err, result) => {
            if (err) throw err;
            console.log(result);
        });
}

module.exports = {setLocation};