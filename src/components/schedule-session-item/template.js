const template = (html, self) => function () {
  const { session } = this;
  const { title, sessionId } = session;
  return html`
    ${title ? html`
      <h3 class="schedule-session-h3">
        ${title}
      </h3>
    ` : html`
      <session-summary-wrapper .sessionId=${sessionId}>
        <session-summary-item-two>
        </session-summary-item-two>
      </session-summary-wrapper>
    `}
  `;
}.bind(self)();

export { template };
