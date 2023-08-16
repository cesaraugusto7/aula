/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require("firebase-functions");

module.exports = functions.firestore.document('batimentos_paciente/{docid}').onUpdate((change, context) => {
  change.after.ref.set({ status: 'finalizado' }, { merge: true })
  console.log(change.after.data().batimentos);
})