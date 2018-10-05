const functions = require('firebase-functions');
const admin = require('firebase-admin');

const helloWorld = require('./actions/helloworld');
const user = require('./models/user/https');
const speakerDatabaseOnWrite = require('./models/speaker/database/on-write');
const sessionDatabaseOnWrite = require('./models/session/database/on-write');
const scheduleDayFirestoreOnWrite = require('./models/schedule-day/firestore/on-write');
const scheduleTimeslotFirestoreOnWrite = require('./models/schedule-timeslot/firestore/on-write');
const scheduleSessionFirestoreOnWrite = require('./models/schedule-session/firestore/on-write');

admin.initializeApp();

exports.helloWorld = functions.https.onRequest(helloWorld());
exports.user = functions.https.onRequest(user());
exports.speakerDatabaseOnWrite = speakerDatabaseOnWrite(functions);
exports.sessionDatabaseOnWrite = sessionDatabaseOnWrite(functions);
exports.scheduleDayFirestoreOnWrite = scheduleDayFirestoreOnWrite(functions, admin);
exports.scheduleTimeslotFirestoreOnWrite = scheduleTimeslotFirestoreOnWrite(functions, admin);
exports.scheduleSessionFirestoreOnWrite = scheduleSessionFirestoreOnWrite(functions, admin);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
