const onWrite = admin => (change, context) => {
  const { before, after } = change;
  const { params } = context;
  const { eventId, timeslotId } = params;
  const document = after.exists ? after.data() : null;
  const oldDocument = before.exists ? before.data() : null;
  const database = admin.database();
  const path = `events/${eventId}/schedule`;
  const updates = {};
  if (oldDocument) {
    const { dayId } = oldDocument;
    updates[`${path}/lists/days/${dayId}/${timeslotId}`] = null;
  }
  if (document) { // onCreate or onUpdate
    const { dayId } = document;
    updates[`${path}/data/timeslots/${timeslotId}`] = {
      startTime: document.startTime || '',
      endTime: document.endTime || '',
      dayId: dayId || ''
    };
    updates[`${path}/lists/days/${dayId}/${timeslotId}`] = parseInt(document.startTime, 10);
  } else { // onDelete
    updates[`${path}/data/timeslots/${timeslotId}`] = null;
    updates[`${path}/lists/timeslots/${timeslotId}`] = null;
  }

  return database.ref().update(updates);
};

module.exports = (functions, admin) => functions
  .firestore
  .document(`schedule/{eventId}/timeslots/{timeslotId}`)
  .onWrite(onWrite(admin));
