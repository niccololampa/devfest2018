const template = (html, self) => function () {
  const { sessions } = this;
  return html`
    ${sessions.map(session => html`
      <schedule-session-wrapper .sessionId=${session}>
        <schedule-session-item>
        </schedule-session-item>
      </schedule-session-list-wrapper>
    `)}
  `;
}.bind(self)();

export { template };
