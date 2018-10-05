const template = (html, self) => function () {
  const { session } = this;
  const { $key, title, speaker } = session;
  return html`
    <h3 class="session-summary-item-two-h3">
      <a class="session-summary-item-two-title" href="/session/${$key}">
        ${title}
      </a>
    </h3>
    ${speaker
      ? html`
        <speaker-summary-wrapper .speakerId=${speaker}>
          <speaker-summary-item-two>
          </speaker-summary-item-two>
        </speaker-summary-wrapper>
      `
      : ''}
  `;
}.bind(self)();

export { template };
