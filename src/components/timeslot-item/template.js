const template = (html, self) => function () {
  const { timeslot, timeString } = this;
  const { startTime, $key } = timeslot;
  return html`
    <div class="timeslot-item-time-schedule">
      <h3 class="timeslot-item-h3">
        ${timeString(startTime)}
      </h3>
    </div>
    <div class="timeslot-item-session-schedule">
      <schedule-session-list-wrapper .timeslotId=${$key}>
        <schedule-session-list>
        </schedule-session-list>
      </schedule-session-list-wrapper>
    </div>
  `;
}.bind(self)();

export { template };
