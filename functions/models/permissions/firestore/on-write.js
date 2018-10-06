const onWrite = admin => (change, context) => {
  const { before, after } = change;
  const { params } = context;
  const { userId } = params;
  const document = after.exists ? after.data() : null;
  const oldDocument = before.exists ? before.data() : null;
  const path = `permissions/data/${userId}`;
  const database = admin.database();
  const updates = {};

  if (oldDocument) { // remove old data
    const { permissions } = oldDocument;
    if (permissions && permissions.length) {
      for (let permission of permissions) {
        updates[`${path}/${permission}`] = false;
      }
    }
  }

  if (document) { // onCreate or onUpdate
    const { permissions } = document;
    if (permissions && permissions.length) {
      for (let permission of permissions) {
        updates[`${path}/${permission}`] = true;
      }
    }
  }
  return database.ref().update(updates);
};

module.exports = (functions, admin) => functions
  .firestore
  .document(`permissions/{userId}`)
  .onWrite(onWrite(admin));
