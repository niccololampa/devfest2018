const template = (html, self) => function () {
  const { session } = this;
  const { title, description, speaker } = session;
  return html`
    <h1 class="h1">
      ${title}
    </h1>
    <mark-lite class="description" .text=${(description || 'Gathering data...')}></mark-lite>

    <h1 class="h1">
      Speaker
    </h1>
    <speaker-summary-wrapper .speakerId=${speaker}>
      <speaker-small-item></speaker-small-item>
    </speaker-summary-item>
  `;
}.bind(self)();

export { template };
