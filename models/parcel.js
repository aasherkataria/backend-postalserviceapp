const db = require('../mysql/parcelSQL');


const parcel = (parcelInfo) => db.createPackage(parcelInfo);
const getPackage = (trackingID) => db.getPackage(trackingID);
const getAllPackages = () => db.getAllPackages();
const updatePackage = (trackingID, customerName) => db.updatePackage(trackingID, customerName);

module.exports = {parcel, getPackage, getAllPackages, updatePackage};