module.exports = (admin) => (user) => {
  const settings = { timestampsInSnapshots: true };
  const firestore = admin.firestore();
  firestore.settings(settings);

  // do other things here before deleting
  const { uid } = user;

  return firestore.doc(`users/${uid}`).delete();
};
