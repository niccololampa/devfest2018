const functions = require('firebase-functions');

const httpsActions = require('./https/actions.js');
const httpsModels = require('./https/models.js');

exports.helloWorld = functions.https.onRequest(httpsActions.helloWorld());
exports.user = functions.https.onRequest(httpsModels.user());

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
