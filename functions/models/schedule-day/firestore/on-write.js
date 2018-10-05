const onWrite = admin => (change, context) => {
  const { after } = change;
  const { params } = context;
  const { eventId, dayId } = params;
  const document = after.exists ? after.data() : null;
  const database = admin.database();
  const path = `events/${eventId}/schedule`;
  const updates = {};
  if (document) { // onCreate or onUpdate
    updates[`${path}/data/days/${dayId}`] = {
      title: document.title || '',
      day: document.day || '',
      date: document.date || '',
      dateString: document.dateString || ''
    };
  } else { // onDelete
    updates[`${path}/data/days/${dayId}`] = null;
    updates[`${path}/lists/days/${dayId}`] = null;
  }

  return database.ref().update(updates);
};

module.exports = (functions, admin) => functions
  .firestore
  .document(`schedule/{eventId}/days/{dayId}`)
  .onWrite(onWrite(admin));
