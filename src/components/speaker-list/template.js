const template = (html, self) => function () {
  const { speakers } = this;
  return html`
    <div class="grid">
      ${speakers.map(speaker => html`
        <speaker-summary-item .speaker=${speaker}></speaker-summary-item>
      `)}
    </div>
  `;
}.bind(self)();

export { template };
