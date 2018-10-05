const onWrite = admin => (change, context) => {
  const { before, after } = change;
  const { params } = context;
  const { eventId, sessionId } = params;
  const document = after.exists ? after.data() : null;
  const oldDocument = before.exists ? before.data() : null;
  const database = admin.database();
  const path = `events/${eventId}/schedule`;
  const updates = {};

  if (oldDocument) {
    const { timeslots } = oldDocument;

    if (timeslots.length) {
      for (let timeslotId of timeslots) {
        updates[`${path}/lists/timeslots/${timeslotId}/${sessionId}`] = null;
        if (document.sessionId) {
          updates[`events/${eventId}/sessions/data/${oldDocument.sessionId}/timeslots/${timeslotId}`] = null;
          updates[`events/${eventId}/sessions/data/${oldDocument.sessionId}/timeslots/${timeslotId}`] = null;
        }
      }
    }
  }
  if (document) { // onCreate or onUpdate
    const { timeslots } = document;
    updates[`${path}/data/sessions/${sessionId}`] = {
      title: document.title || '',
      sessionId: document.sessionId || '',
      room: document.room || ''
    };
    if (timeslots.length) {
      for (let timeslotId of timeslots) {
        updates[`${path}/lists/timeslots/${timeslotId}/${sessionId}`] = true;
        if (document.sessionId) {
          updates[`events/${eventId}/sessions/data/${document.sessionId}/timeslots/${timeslotId}`] = true;
          updates[`events/${eventId}/sessions/data/${document.sessionId}/timeslots/${timeslotId}`] = true;
        }
      }
    }
  } else { // onDelete
    updates[`${path}/data/sessions/${sessionId}`] = null;
  }

  return database.ref().update(updates);
};

module.exports = (functions, admin) => functions
  .firestore
  .document(`schedule/{eventId}/sessions/{sessionId}`)
  .onWrite(onWrite(admin));
