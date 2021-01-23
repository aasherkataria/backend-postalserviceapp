const db = require('../mysql/parcelSQL');


const parcel = (parcelInfo) => db.createPackage(parcelInfo);
const getPackage = (trackingID) => db.getPackage(trackingID);

module.exports = {parcel, getPackage};