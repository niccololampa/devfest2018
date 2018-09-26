const template = (html, self) => function () {
  const { speaker } = this;
  const { $key, name } = speaker;
  return html`
    <div class="bar"></div>
    <h2 class="h2">
      <a class="title" href="/speakers/${$key}">
        ${name}
      </a>
    </h2>

  `;
}.bind(self)();

export { template };
