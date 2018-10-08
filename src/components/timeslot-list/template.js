const template = (html, self) => function () {
  const { timeslots } = this;
  return html`
    ${timeslots.map(timeslot => html`
      <timeslot-wrapper .timeslotId=${timeslot.$key}>
        <timeslot-item></timeslot-item>
      </timeslot-wrapper>
    `)}
  `;
}.bind(self)();

export { template };
