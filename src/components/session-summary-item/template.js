const template = (html, self) => function () {
  const { session } = this;
  const { $key, title } = session;
  return html`
    <div class="session-summary-item-bar"></div>
    <h2 class="session-summary-item-h2">
      <a class="session-summary-item-title" href="/session/${$key}">
        ${title}
      </a>
    </h2>

  `;
}.bind(self)();

export { template };
