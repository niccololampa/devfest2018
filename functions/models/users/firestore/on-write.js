const onWrite = admin => (change, context) => {
  const { before, after } = change;
  const { params } = context;
  const { userId } = params;
  const settings = { timestampsInSnapshots: true };
  const document = after.exists ? after.data() : null;
  const oldDocument = before.exists ? before.data() : null;
  const firestore = admin.firestore();
  firestore.settings(settings);

  if (document && !oldDocument) { // onCreate
    return firestore.doc(`permissions/${userId}`).set({
      permission: []
    });
  } else if (oldDocument && !document) { // onDelete
    return firestore.doc(`permissions/${userId}`).delete();
  }
  return null;
};

module.exports = (functions, admin) => functions
  .firestore
  .document(`users/{userId}`)
  .onWrite(onWrite(admin));
