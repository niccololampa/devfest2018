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
    const {
      writeDatabase,
      readDatabase,
      writeFirestore,
      readFirestore,
      writeStorage,
      readStorage
    } = oldDocument;
    if (writeDatabase && writeDatabase.length) {
      for (let permission of writeDatabase) {
        updates[`${path}/writeDatabase/${permission}`] = false;
      }
    }
    if (readDatabase && readDatabase.length) {
      for (let permission of readDatabase) {
        updates[`${path}/readDatabase/${permission}`] = false;
      }
    }
    if (writeFirestore && writeFirestore.length) {
      for (let permission of writeFirestore) {
        updates[`${path}/writeFirestore/${permission}`] = false;
      }
    }
    if (readFirestore && readFirestore.length) {
      for (let permission of readFirestore) {
        updates[`${path}/readFirestore/${permission}`] = false;
      }
    }
    if (writeStorage && writeStorage.length) {
      for (let permission of writeStorage) {
        updates[`${path}/writeStorage/${permission}`] = false;
      }
    }
    if (readStorage && readStorage.length) {
      for (let permission of readStorage) {
        updates[`${path}/readStorage/${permission}`] = false;
      }
    }
  }

  if (document) { // onCreate or onUpdate
    const {
      writeDatabase,
      readDatabase,
      writeFirestore,
      readFirestore,
      writeStorage,
      readStorage
    } = document;
    if (writeDatabase && writeDatabase.length) {
      for (let permission of writeDatabase) {
        updates[`${path}/writeDatabase/${permission}`] = true;
      }
    }
    if (readDatabase && readDatabase.length) {
      for (let permission of readDatabase) {
        updates[`${path}/readDatabase/${permission}`] = true;
      }
    }
    if (writeFirestore && writeFirestore.length) {
      for (let permission of writeFirestore) {
        updates[`${path}/writeFirestore/${permission}`] = true;
      }
    }
    if (readFirestore && readFirestore.length) {
      for (let permission of readFirestore) {
        updates[`${path}/readFirestore/${permission}`] = true;
      }
    }
    if (writeStorage && writeStorage.length) {
      for (let permission of writeStorage) {
        updates[`${path}/writeStorage/${permission}`] = true;
      }
    }
    if (readStorage && readStorage.length) {
      for (let permission of readStorage) {
        updates[`${path}/readStorage/${permission}`] = true;
      }
    }
  }
  return database.ref().update(updates);
};

module.exports = (functions, admin) => functions
  .firestore
  .document(`permissions/{userId}`)
  .onWrite(onWrite(admin));
