const template = (html, self) => function () {
  const { days } = this;
  return html`
    ${days.map(day => html`
      <h2 class="h2">${day.title}</h2>
      <timeslot-list-wrapper .dayId=${day.$key}>
        <timeslot-list>
        </timeslot-list>
      </timeslot-list-wrapper>
    `)}
  `;
}.bind(self)();

export { template };
