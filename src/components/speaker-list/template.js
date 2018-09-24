const template = (html, self) => function () {
  const { speakers } = this;
  return html`
    ${speakers.map(speaker => html`
      <speaker-summary-item .speaker=${speaker}></speaker-summary-item>
    `)}
  `;
}.bind(self)();

export { template };
