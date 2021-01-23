const db = require('../mysql/parcelSQL');


const parcel = (parcelInfo) => db.setLocation(parcelInfo);

module.exports = {parcel};