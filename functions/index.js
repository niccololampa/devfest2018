const functions = require('firebase-functions');

const helloWorld = require('./actions/helloworld');
const user = require('./models/user/https');
const userOnWrite = require('./models/user/database/on-write');

exports.helloWorld = functions.https.onRequest(helloWorld());
exports.user = functions.https.onRequest(user());
exports.userOnWrite = userOnWrite(functions);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
