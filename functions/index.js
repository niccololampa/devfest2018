const functions = require('firebase-functions');

const helloWorld = require('./https/actions/helloworld');
const user = require('./https/models/user');

exports.helloWorld = functions.https.onRequest(helloWorld());
exports.user = functions.https.onRequest(user());

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
