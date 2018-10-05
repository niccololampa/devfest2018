const onWrite = () => (change, context) => {
  const { after } = change;
  const { params } = context;
  const { sessionId } = params;
  const { title, speaker } = after.val();
  return after
    .ref
    .parent
    .parent
    .child(`lists/summary/${sessionId}`)
    .set(after.exists()
      ? {
        title: title || null,
        speaker: speaker || null
      }
      : null);
};

module.exports = functions => functions
  .database
  .ref(`events/{eventId}/sessions/data/{sessionId}`)
  .onWrite(onWrite());
