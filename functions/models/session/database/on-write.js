const onWrite = () => (change, context) => {
  const { after } = change;
  const { params } = context;
  const { sessionId } = params;
  const { title } = after.val();
  console.log(after.exists());
  return after
    .ref
    .parent
    .parent
    .child(`lists/summary/${sessionId}`)
    .set(after.exists()
      ? {
        title: title || null
      }
      : null);
};

module.exports = functions => functions
  .database
  .ref(`events/{eventId}/sessions/data/{sessionId}`)
  .onWrite(onWrite());
