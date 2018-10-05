const template = (html, self) => function () {
  const { speaker } = this;
  const { $key, name } = speaker;
  return html`
    <div class="speaker-small-item-bar"></div>
    <h2 class="speaker-small-item-h2">
      <a class="speaker-small-item-title" href="/speakers/${$key}">
        ${name}
      </a>
    </h2>

  `;
}.bind(self)();

export { template };
