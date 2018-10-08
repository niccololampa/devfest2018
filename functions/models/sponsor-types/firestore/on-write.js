const onWrite = admin => (change, context) => {
  const { before, after } = change;
  const { params } = context;
  const { eventId, typeId } = params;
  const document = after.exists ? after.data() : null;
  const oldDocument = before.exists ? before.data() : null;
  const database = admin.database();
  const path = `events/${eventId}/sponsor-types`;
  const updates = {};
  if (oldDocument) {
    // const { typeId } = oldDocument;
    // updates[`${path}/lists/days/${dayId}/${timeslotId}`] = null;
  }
  if (document) { // onCreate or onUpdate
    // const { typeId } = document;
    updates[`${path}/data/${typeId}`] = {
      name: document.name || ''
    };

    if (document.order !== null && document.order !== undefined) {
      updates[`${path}/data/${typeId}`].order = document.order;
      updates[`${path}/lists/types/${typeId}`] = document.order;
    }
  } else { // onDelete
    updates[`${path}/data/${typeId}`] = null;
    updates[`${path}/lists/types/${typeId}`] = null;
    updates[`events/${eventId}/sponsors/lists/types/${typeId}`] = null;
  }

  return database.ref().update(updates);
};

module.exports = (functions, admin) => functions
  .firestore
  .document(`sponsors/{eventId}/types/{typeId}`)
  .onWrite(onWrite(admin));
