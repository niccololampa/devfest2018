const onWrite = () => (change, context) => {
  const { after } = change;
  const { params } = context;
  const { speakerId } = params;
  const { name, affiliation, location } = after.val();
  return after
    .ref
    .parent
    .parent
    .child(`lists/summary/${speakerId}`)
    .set(after.exists()
      ? {
        name: name || null,
        affiliation: affiliation || null,
        location: location || null
      }
      : null);
};

module.exports = functions => functions
  .database
  .ref(`events/{eventId}/speakers/data/{speakerId}`)
  .onWrite(onWrite());
